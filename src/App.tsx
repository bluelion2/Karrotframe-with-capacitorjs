import { css, Global } from '@emotion/react'
import { Navigator, Screen } from 'karrotframe'
import React from 'react'

import { resetCSS } from './_reset'
import { Chat, Community, Detail, Home, Login, Mypage, Nearby } from './Pages'

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
        <Screen path="/" component={Login} />
        <Screen path="/home" component={Home} />
        <Screen path="/detail/:id" component={Detail} />
        <Screen path="/community" component={Community} />
        <Screen path="/nearby" component={Nearby} />

        <Screen path="/chat" component={Chat} />

        <Screen path="/mypage" component={Mypage} />
      </Navigator>
    </>
  )
}

export default App
