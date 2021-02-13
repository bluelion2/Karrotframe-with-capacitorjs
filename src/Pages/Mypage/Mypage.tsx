import styled from '@emotion/styled'
import { ScreenHelmet } from 'karrotframe'
import React from 'react'

import { TabBar } from '../../Components'

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled.div`
  flex: 1;
`
