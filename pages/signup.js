import AppLayout from "../components/AppLayout";
import {Head} from "next/document";

function Signup() {
  return (
    <AppLayout>
      <Head>
        <title>회원가입</title>
      </Head>
      <div>Sign up</div>
    </AppLayout>
  )
}

export default Signup