import React, { useState } from 'react'
import constant from './constant'
import {
  SafeAreaView,
  StyleSheet
} from 'react-native'
import Menu from './Menu'
import QuizePage from './Quiz/QuizPage'
import LeaderBoard from './LeaderBoard/LeaderBoard'

function WelcomePage (): React.JSX.Element {
  const [page, setPage] = useState('menu')

  const render = (): React.JSX.Element | undefined => {
    switch (page) {
      case 'menu':
        return <Menu setPage={setPage} />
      case 'quiz':
        return <QuizePage setPage={setPage} />
      case 'leaderboard':
        return <LeaderBoard setPage={setPage} />
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {render()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: constant.COLOR.BACKGROUND
  }
})

export default WelcomePage
