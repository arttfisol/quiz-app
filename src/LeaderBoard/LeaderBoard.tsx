import React, { PropsWithChildren } from 'react'
import constant from '../constant'
import global from '../../global'
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import PlayerCard from './PlayerCard'

type SectionProps = PropsWithChildren<{
  setPage: React.Dispatch<React.SetStateAction<string>>
}>

function LeaderBoard ({ setPage }: SectionProps): React.JSX.Element {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
    >
      <View style={styles.container}>
        <View style={styles.board}>
          <Text style={styles.header}>
            Leader Board
          </Text>
          <Image
            style={styles.logo}
            source={require('../../assets/leaderboard.png')}
          />
          {
            global.players.map((player, index) => {
              return (
                <PlayerCard key={index} name={player.name} number={index + 1} score={player.score} />
              )
            })
          }
        </View>
        <TouchableOpacity style={styles.button} onPress={() => { setPage('menu') }}>
          <Text style={styles.title}>
            Back To Menu
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 20,
    shadowColor: constant.COLOR.SHADOW,
    shadowOffset: { width: -6, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 3
  },
  button: {
    width: '50%',
    backgroundColor: constant.COLOR.BUTTON,
    paddingVertical: 20,
    marginVertical: 15,
    borderRadius: 10,
    shadowColor: constant.COLOR.SHADOW,
    shadowOffset: { width: -6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  board: {
    width: '80%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    // paddingHorizontal: 20,
    marginTop: 50,
    borderRadius: 20,
    shadowColor: constant.COLOR.SHADOW,
    shadowOffset: { width: -6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: constant.COLOR.LEADERBOARD.BOARD
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  header: {
    color: '#333',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 18
  },
  title: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center'
  }
})

export default LeaderBoard
