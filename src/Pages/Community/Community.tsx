import styled from '@emotion/styled'
import { ScreenHelmet } from 'karrotframe'
import React from 'react'

import { TabBar } from '../../Components'

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled.div`
  flex: 1;
`
