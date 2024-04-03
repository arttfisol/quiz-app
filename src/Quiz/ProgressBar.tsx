import React, { PropsWithChildren } from 'react'
import constant from '../constant'
import { View, Animated, StyleSheet } from 'react-native'

type SectionProps = PropsWithChildren<{
  progress: Animated.Value
  total: number
}>

function ProgressBar ({ progress, total }: SectionProps): React.JSX.Element {
  const progressAnim = progress.interpolate({
    inputRange: [0, total],
    outputRange: ['0%', '100%']
  })

  return (
    <View style={styles.progressBarContainer}>
      <Animated.View
        style={[
          {
            height: 7,
            borderRadius: 5,
            backgroundColor: constant.COLOR.PROGRESS_BAR
          },
          {
            width: progressAnim
          }
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  progressBarContainer: {
    width: '60%',
    height: 7,
    borderRadius: 5,
    backgroundColor: '#00000020',
    marginBottom: 5,
    marginTop: 10
  }
})

export default ProgressBar
