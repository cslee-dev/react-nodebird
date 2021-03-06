import {useState, useCallback} from 'react'
import Link from 'next/link'
import {Form, Input, Button} from "antd"
import styled from 'styled-components'
import useInput from '../hooks/useInput'

const ButtonWrapper = styled.div`
  margin-top: 10px;
`
const FormWrapper = styled(Form)`
  padding: 10px
`
export default function LoginForm({setIsLoggedIn}) {
  const [id, handleChangeId] = useInput('')
  const [password, handleChangePassword] = useInput('')

  const handleSubmitForm = useCallback(() => {
    console.log(id, password)
    setIsLoggedIn(true)
  }, [id, password])
  return (
    <FormWrapper onFinish={handleSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={handleChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={handleChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button
          type="primary"
          htmlType="submit"
          loading={false}
        >
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>
              회원가입
            </Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  )
}