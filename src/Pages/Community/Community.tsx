import { ScreenHelmet } from 'karrotframe'
import React from 'react'

import { TabBar } from '../../Components'
import { Container, Main } from '../../Layouts'

const Community: React.FC = () => {
  return (
    <Container>
      <ScreenHelmet title="Community Page" />
      <Main>Community Page</Main>
      <TabBar />
    </Container>
  )
}

export default Community
