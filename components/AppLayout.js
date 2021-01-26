import {useState} from 'react'
import Link from 'next/link'
import {Input, Menu, Row, Col} from 'antd'
import UserProfile from "./UserProfile"
import LoginForm from './LoginForm'

function AppLayout({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{verticalAlign: 'middle'}} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="#">Made by cslee</a>
        </Col>
      </Row>
    </div>
  )

}

export default AppLayout