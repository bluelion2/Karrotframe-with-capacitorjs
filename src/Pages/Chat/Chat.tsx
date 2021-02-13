import { ScreenHelmet } from 'karrotframe'
import React from 'react'

import { TabBar } from '../../Components'
import { Container, Main } from '../../Layouts'

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
