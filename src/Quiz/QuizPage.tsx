import React, { useState, useEffect, PropsWithChildren } from 'react'
import constant from '../constant'
import QuestionCard from './QuestionCard'
import AnswerCard, { Answer } from './AnswerCard'
import ProgressBar from './ProgressBar'
import {
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Animated,
  Text,
  View
} from 'react-native'
import global from '../../global'

export interface Question {
  question: string
  answers: Answer[]
}

type SectionProps = PropsWithChildren<{
  setPage: React.Dispatch<React.SetStateAction<string>>
}>

function QuizePage ({ setPage }: SectionProps): React.JSX.Element {
  const [isDone, setIsDone] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([{
    question: 'test',
    answers: [
      { title: '', isCorrect: false },
      { title: '', isCorrect: false },
      { title: '', isCorrect: false },
      { title: '', isCorrect: false }
    ]
  }])
  const [refreshing, setRefreshing] = useState(false)
  const [isDisabledSelect, setIsDisabledSelect] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [progress, setProgress] = useState(new Animated.Value(1))
  const [fadeAnim] = useState(new Animated.Value(1))

  const setNewQuestionSet = (): void => {
    const numbers: number[] = []
    while (numbers.length < 20) {
      const num = Math.floor(Math.random() * 60)
      !numbers.includes(num) && numbers.push(num)
    }
    const questions = constant.QUESTIONS.filter((_, index): boolean => {
      return numbers.includes(index)
    })
    setQuestions(questions)
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setNewQuestionSet()
      setScore(0)
      setQuestionIndex(0)
      setProgress(new Animated.Value(1))
      setRefreshing(false)
    }, 2000)
  }, [])

  useEffect(() => {
    setNewQuestionSet()
  }, [])

  const sortPlayer = (score: number): undefined => {
    const index = global.players.findIndex((player) => {
      return player.name === 'You'
    })

    if (index === -1) {
      global.players.push({ name: 'You', score })
    } else {
      global.players[index].score = score
    }

    global.players.sort((p1, p2) => p2.score - p1.score)
  }

  const onPressAnswer = (isCorrect: boolean): undefined => {
    if (questionIndex + 1 === questions?.length) { // show result
      isCorrect && setScore(score + 1)
      sortPlayer(isCorrect ? score + 1 : score)
      setTimeout(() => {
        setIsDone(true)
      }, constant.TIMER.ONE_FADEOUT + constant.TIMER.ZERO_FADEOUT)
    } else { // next question
      isCorrect && setScore(score + 1)
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: constant.TIMER.ONE_FADEOUT,
          useNativeDriver: false
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: constant.TIMER.ZERO_FADEOUT,
          useNativeDriver: false
        })
      ]).start(() => {
        setTimeout(() => {
          setQuestionIndex(questionIndex + 1)
          Animated.parallel([
            Animated.timing(progress, {
              toValue: questionIndex + 2,
              duration: constant.TIMER.PROGRESS_BAR,
              useNativeDriver: false
            }),
            Animated.sequence([
              Animated.timing(fadeAnim, {
                toValue: 0,
                duration: constant.TIMER.ZERO_FADEIN,
                useNativeDriver: false
              }),
              Animated.timing(fadeAnim, {
                toValue: 1,
                duration: constant.TIMER.ONE_FADEIN,
                useNativeDriver: false
              })
            ])
          ]).start()
          setIsDisabledSelect(false)
        }, constant.TIMER.ONE_FADEOUT + constant.TIMER.ZERO_FADEOUT)
      })
    }
  }

  const renderAnswer = (): React.JSX.Element => {
    return (
      <View style={{ width: '100%' }}>
        {
            questions[questionIndex].answers.map((answer, index) => (
              <Animated.View
                key={index}
                style={{
                  opacity: fadeAnim,
                  alignItems: 'center'
                }}
              >
                <AnswerCard title={answer.title} isCorrect={answer.isCorrect} onPress={onPressAnswer} isDisabledSelect={isDisabledSelect} setIsDisabledSelect={setIsDisabledSelect} />
              </Animated.View>
            ))
        }
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        {
          isDone
            ? (
              <View style={styles.viewResult}>
                <Text style={styles.textResult}>
                  Your Score is {score} !
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => { setPage('leaderboard') }}>
                  <Text style={styles.title}>
                    Click to See Leader Board
                  </Text>
                </TouchableOpacity>
              </View>)
            : (
              <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                  <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                  }
              >
                <Text style={styles.runningNumber}>{questionIndex + 1}/{questions?.length}</Text>
                <ProgressBar progress={progress} total={questions.length} />
                <QuestionCard question={questions[questionIndex].question} />
                {renderAnswer()}
              </ScrollView>
              )
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewContainer: {
    flex: 1,
    backgroundColor: constant.COLOR.BACKGROUND
  },
  scrollView: {
    flex: 1,
    alignItems: 'center'
  },
  runningNumber: {
    marginTop: 35
  },
  viewResult: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textResult: {
    fontSize: 20
  },
  button: {
    backgroundColor: constant.COLOR.BUTTON,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginTop: 50,
    borderRadius: 10,
    shadowColor: constant.COLOR.SHADOW,
    shadowOffset: { width: -6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  title: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center'
  }
})

export default QuizePage
