import styled from '@emotion/styled'
import { useNavigator } from 'karrotframe'
import { ScreenHelmet } from 'karrotframe/lib'
import React from 'react'

import { Card, TabBar } from '../../Components'

const Home: React.FC = () => {
  const { push } = useNavigator()

  const onItemClick = async (index: number) => {
    const data = await push(`/detail/${index}`)
    console.log('return data is', data)
  }

  return (
    <Container>
      <ScreenHelmet title="물건 리스트" />
      <Main>
        {new Array(20).fill(null).map((v, i) => (
          <Card
            title={`${i + 1}번`}
            key={i}
            caption={`${i + 1}번째 물건!`}
            price={`${i * 5000}`}
            onClick={() => onItemClick(i + 1)}
          />
        ))}
      </Main>
      <TabBar />
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled.div`
  flex: 1;
  overflow-y: scroll;
`
