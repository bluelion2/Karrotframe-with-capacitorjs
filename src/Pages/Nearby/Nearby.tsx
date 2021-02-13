import { ScreenHelmet } from 'karrotframe'
import React from 'react'

import { TabBar } from '../../Components'
import { Container, Main } from '../../Layouts'

const Nearby: React.FC = () => {
  return (
    <Container>
      <ScreenHelmet title="Nearby Page" />
      <Main>Nearby Page</Main>
      <TabBar />
    </Container>
  )
}

export default Nearby
