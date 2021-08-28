import '../styles/globals.css'
import Head from 'next/head'
import { HomeContextProvider } from '../contexts/HomeContext/HomeContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amaranth:wght@700&family=Open+Sans:wght@400;600;700&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
