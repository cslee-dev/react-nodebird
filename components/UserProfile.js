import {useCallback} from 'react'
import {Card, Button, Avatar} from 'antd'

export default function UserProfile({setIsLoggedIn}) {
  const handleLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, [])
  return (
    <Card
      actions={[
        <div key="twit">짹쨱</div>,
        <div key="followings">팔로잉</div>,
        <div key="followers">팔로워</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>CL</Avatar>}
        title="Cslee"
      />
      <Button onClick={handleLogOut}>로그아웃</Button>
    </Card>
  )
}