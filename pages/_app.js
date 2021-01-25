import 'antd/dist/antd.css'
import Head from "next/head";

function App({Component, pageProps}) {
  return (
    <>
        <Head>
          <meta charSet="utf-8"/>
          <title>NodeBird</title>
        </Head>
    <Component {...pageProps} />
    </>
    )
}

export default App