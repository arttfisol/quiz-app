import React, { PropsWithChildren } from 'react'
import constant from '../constant'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

type SectionProps = PropsWithChildren<{
  question: string
}>

function QuestionCard ({ question }: SectionProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.question}>
          {question}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '75%',
    marginTop: 30,
    marginBottom: 40,
    marginVertical: 10,
    padding: 40,
    borderTopRightRadius: 40,
    borderRadius: 10,
    backgroundColor: constant.COLOR.QUESTION.IDLE,
    alignItems: 'center',
    shadowColor: constant.COLOR.SHADOW,
    shadowOffset: { width: -6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  question: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center'
  }
})

export default QuestionCard
