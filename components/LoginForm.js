import {useState, useCallback} from 'react'
import Link from 'next/link'
import {Form, Input, Button} from "antd";

export default function LoginForm() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const handleChangeId = useCallback(e => {
    setId(e.target.value)
  }, [])

  const handleChangePassword = useCallback(e => {
    setPassword(e.target.value)
  }, [])

  return (
    <Form>
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
      <div>
        <Button
          type="primary"
          htmlType="submit"
          loding={false}
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
      </div>
    </Form>
  )
}