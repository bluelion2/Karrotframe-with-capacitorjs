import styled from '@emotion/styled'
import { ScreenHelmet } from 'karrotframe'
import React from 'react'

import { TabBar } from '../../Components'

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled.div`
  flex: 1;
`
