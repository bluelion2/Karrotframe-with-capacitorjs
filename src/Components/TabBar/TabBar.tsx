import styled from '@emotion/styled'
import { useNavigator } from 'karrotframe/lib'
import React from 'react'

const TabBar = () => {
  const { replace } = useNavigator()

  const onTabButtonClick = (route: string) => {
    replace(route)
  }

  return (
    <Wrap>
      <button className="navigation-button-wrap" onClick={() => onTabButtonClick('/home')}>
        <p>홈</p>
      </button>
      <button className="navigation-button-wrap" onClick={() => onTabButtonClick('/community')}>
        <p>동네 생활</p>
      </button>
      <button className="navigation-button-wrap" onClick={() => onTabButtonClick('/nearby')}>
        <p>내 근처</p>
      </button>
      <button className="navigation-button-wrap" onClick={() => onTabButtonClick('/chat')}>
        <p>채팅</p>
      </button>
      <button className="navigation-button-wrap" onClick={() => onTabButtonClick('/mypage')}>
        <p>나의 당근</p>
      </button>
    </Wrap>
  )
}

export default TabBar

const Wrap = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #e0e0e0;

  .navigation-button-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 60px;
    width: 20%;
    background-color: white;
    > p {
    }
  }
`
