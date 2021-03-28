import Head from 'next/head'
import App from '../components/app'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Component Inspector</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App></App>

    </div>
  )
}
