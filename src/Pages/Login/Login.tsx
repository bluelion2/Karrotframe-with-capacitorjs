import styled from '@emotion/styled'
import { useNavigator } from 'karrotframe'
import React from 'react'
import { useState } from 'react'

const Login: React.FC = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const { push, replace } = useNavigator()

  const onSubmit = () => {
    console.log({
      id,
      password,
    })
    replace('/home')
  }

  return (
    <Container>
      <h2>어서오세요!</h2>
      <Form onClick={onSubmit}>
        <input value={id} onChange={(e) => setId(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <Submit type="submit">로그인!</Submit>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  > h2,
  input {
    margin-bottom: 20px;
  }
`

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > input {
    width: 200px;
    height: 40px;
    border-radius: 10px;
    padding-left: 20px;
  }
`

const Submit = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
`

export default Login
