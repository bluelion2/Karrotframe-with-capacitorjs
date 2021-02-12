import styled from '@emotion/styled'
import * as React from 'react'

type Props = {
  title: string
  caption: string
  price: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Card = ({ title, caption, price, onClick }: Props) => {
  return (
    <CardWrap onClick={onClick}>
      <div className="card-left-section"></div>
      <div className="card-right-section">
        <strong>{title}</strong>
        <p>{caption}</p>
        <span>{price}원</span>
      </div>
    </CardWrap>
  )
}

export default Card

const CardWrap = styled.div`
  display: flex;
  padding: 20px;
  margin: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;

  .card-left-section {
    margin-right: 12px;
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background-color: #818181;
  }

  .card-right-section {
    display: flex;
    flex-direction: column;
  }
`
