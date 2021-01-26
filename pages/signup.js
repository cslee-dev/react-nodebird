import {useCallback, useState} from 'react'
import AppLayout from "../components/AppLayout"
import Head from "next/head"
import {Checkbox, Form, Input, Button, List} from 'antd'
import useInput from "../hooks/useInput"
import styled from "styled-components"


const ButtonWrapper = styled.div`
  margin-top: 20px;
`

const ErrorMessage = styled.div`
  color: red;
`
export default function Signup() {
  const [id, handleChangeId] = useInput('')
  const [nickname, handleChangeNickname] = useInput('')
  const [password, handleChangePassword] = useInput('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const handleChangePasswordCheck = useCallback(e => {
    setPasswordCheck(e.target.value)
    setPasswordError(e.target.value !== password)
  }, [password])

  const [term, setTerm] = useState('')
  const [termError, setTermError] = useState(false)
  const handleChangeTerm = useCallback(e => {
    setTerm(e.target.checked)
    setTermError(false)
  })
  const handleSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true)
    }
    if (!term) {
      return setTermError(true)
    }
    console.log(id, nickname, password)
  })
  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        <Form onFinish={handleSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={handleChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input name="user-nick" value={nickname} required onChange={handleChangeNickname} />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input name="user-password" type="password" value={password} required onChange={handleChangePassword} />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 체크</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              onChange={handleChangePasswordCheck}
              required
            />
          </div>
          <div>
            {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            <Checkbox name="user-term" checked={term} onChange={handleChangeTerm}>노드버드 가입에 동의합니다.</Checkbox>
            {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
          </div>
          <ButtonWrapper>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </ButtonWrapper>
        </Form>
      </AppLayout>
    </>
  )
}