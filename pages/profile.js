import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

export default function Profile() {
  const followerList = [{nickname: 'cslee'}, {nickname: 'foo'}, {nickname: 'bar'}]
  const followingList = [{nickname: 'cslee'}, {nickname: 'foo'}, {nickname: 'bar'}]
  return (
    <>
      <Head>
        <title>프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>

  )
}