import React, { PropsWithChildren } from 'react'
import constant from './constant'
import {
  TouchableOpacity,

  StyleSheet,
  Text,
  View
} from 'react-native'

type SectionProps = PropsWithChildren<{
  setPage: React.Dispatch<React.SetStateAction<string>>
}>

function Menu ({ setPage }: SectionProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => { setPage('quiz') }}>
        <Text style={styles.title}>
          Let's Quiz
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { setPage('leaderboard') }}>
        <Text style={styles.title}>
          Leader Board
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '60%',
    backgroundColor: constant.COLOR.BUTTON,
    paddingVertical: 25,
    marginVertical: 15,
    borderRadius: 10,
    shadowColor: constant.COLOR.SHADOW,
    shadowOffset: { width: -6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center'
  }
})

export default Menu
