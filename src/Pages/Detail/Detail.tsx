import { ScreenHelmet, useParams } from 'karrotframe'
import React from 'react'

import { Container } from '../../Layouts'

const Detail: React.FC = () => {
  const params = useParams<{ id?: string }>()

  return (
    <Container>
      <ScreenHelmet title="상세 페이지" />
      <p>{`${params?.id}번 상품 상세`}</p>
    </Container>
  )
}

export default Detail
