import styled from '@emotion/styled'
import { useNavigator } from 'karrotframe'
import { ScreenHelmet } from 'karrotframe/lib'
import React from 'react'

import { Card, TabBar } from '../../Components'

const PageHome: React.FC = () => {
  const { push } = useNavigator()

  const onItemClick = (index: number) => {
    push(`/detail/${index}`)
  }

  return (
    <Container>
      <ScreenHelmet title="안녕 타이틀" />
      <Main>
        {new Array(20).fill(null).map((v, i) => (
          <Card
            title={`${i + 1}번`}
            key={i}
            caption={`${i + 1}번째 물건!`}
            price={`${i * 5000}`}
            onClick={() => onItemClick(i)}
          />
        ))}
      </Main>
      <Bottom>
        <TabBar />
      </Bottom>
    </Container>
  )
}

export default PageHome

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled.div`
  flex: 1;
  overflow-y: scroll;
`

const Bottom = styled.div``
