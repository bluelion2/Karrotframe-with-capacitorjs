import { css, Global } from '@emotion/react'
import { Navigator, Screen, useNavigator, useParams } from 'karrotframe'
import React from 'react'
import { useHistory } from 'react-router'

import { resetCSS } from './_reset'
import { Home } from './Pages'

function App() {
  return (
    <>
      <Global
        styles={css`
          ${resetCSS}
        `}
      />
      <Navigator
        // theme="Android"
        theme="Cupertino"
      >
        <Screen path="/" component={Home} />
        <Screen path="/detail/:id" component={Detail} />
      </Navigator>
    </>
  )
}

export default App

const Detail = () => {
  const { pop } = useNavigator()
  const history = useHistory()
  const params = useParams()

  console.log('history', history)
  console.log('params', params)

  const onButtonClick = () => {
    pop()
  }

  return (
    <div>
      디테일 화면 입니다.
      <button onClick={onButtonClick}>홈 화면으로</button>
    </div>
  )
}
