import { ScreenHelmet } from 'karrotframe'
import React from 'react'

import { TabBar } from '../../Components'
import { Container, Main } from '../../Layouts'

const Mypage: React.FC = () => {
  return (
    <Container>
      <ScreenHelmet title="Mypage Page" />
      <Main>Mypage Page</Main>
      <TabBar />
    </Container>
  )
}

export default Mypage
