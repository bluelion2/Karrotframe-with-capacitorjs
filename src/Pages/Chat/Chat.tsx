import styled from '@emotion/styled'
import { ScreenHelmet } from 'karrotframe'
import React from 'react'

import { TabBar } from '../../Components'

const Chat: React.FC = () => {
  return (
    <Container>
      <ScreenHelmet title="Chat Page" />
      <Main>Chat Page</Main>
      <TabBar />
    </Container>
  )
}

export default Chat

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled.div`
  flex: 1;
`
