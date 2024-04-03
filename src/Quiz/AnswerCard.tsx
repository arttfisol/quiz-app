import React, { PropsWithChildren, useState } from 'react'
import constant from '../constant'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native'

type SectionProps = PropsWithChildren<{
  title: string
  isCorrect: boolean
  isDisabledSelect: boolean
  setIsDisabledSelect: React.Dispatch<React.SetStateAction<boolean>>
  onPress: ((isCorrect: boolean) => undefined)
}>

export interface Answer {
  title: string
  isCorrect: boolean
}

function AnswerCard ({ title, isCorrect, isDisabledSelect, setIsDisabledSelect, onPress }: SectionProps): React.JSX.Element {
  const [buttonColor, setButtonColor] = useState(constant.COLOR.ANSWER.IDLE)
  const containerStyle = StyleSheet.flatten([styles.container, { backgroundColor: buttonColor }])

  const onPressTouchable = (): undefined => {
    if (!isDisabledSelect) {
      setIsDisabledSelect(true)
      setButtonColor(isCorrect ? constant.COLOR.ANSWER.CORRECT : constant.COLOR.ANSWER.INCORRECT)
      setTimeout(() => {
        onPress(isCorrect)
        setTimeout(() => {
          setButtonColor(constant.COLOR.ANSWER.IDLE)
        }, constant.TIMER.ONE_FADEOUT + constant.TIMER.ZERO_FADEOUT)
      }, constant.TIMER.AFTER_SELECT_ANSWER)
    }
  }

  return (
    <TouchableOpacity style={styles.touchable} onPress={onPressTouchable}>
      <View style={containerStyle}>
        <Text style={styles.answer}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchable: {
    width: '60%'
  },
  container: {
    marginTop: 10,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: constant.COLOR.ANSWER.IDLE,
    alignItems: 'center',
    shadowColor: constant.COLOR.SHADOW,
    shadowOffset: { width: -6, height: 6 },
    shadowOpacity: 0.07,
    shadowRadius: 3
  },
  answer: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center'
  }
})

export default AnswerCard
