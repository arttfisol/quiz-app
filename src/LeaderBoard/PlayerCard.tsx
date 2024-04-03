import React, { PropsWithChildren } from 'react'
import constant from '../constant'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

type SectionProps = PropsWithChildren<{
  number: number
  name: string
  score: number
}>

function PlayerCard ({ number, name, score }: SectionProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>
          {score}
        </Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>
          {number}. {name}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  nameContainer: {
    paddingLeft: 20,
    width: '45%',
    position: 'absolute',
    backgroundColor: constant.COLOR.LEADERBOARD.NAME,
    borderRadius: 5,
    padding: 8
  },
  scoreContainer: {
    paddingRight: 20,
    width: '65%',
    backgroundColor: constant.COLOR.LEADERBOARD.SCORE,
    borderRadius: 5,
    shadowColor: constant.COLOR.SHADOW,
    shadowOffset: { width: -1, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    padding: 8
  },
  container: {
    flexDirection: 'row',
    marginVertical: 7,
    backgroundColor: constant.COLOR.LEADERBOARD.BOARD
  },
  score: {
    color: '#333',
    fontSize: 14,
    textAlign: 'right'
  },
  name: {
    color: '#333',
    fontSize: 14,
    textAlign: 'left'
  }
})

export default PlayerCard
