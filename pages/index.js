import Head from 'next/head'
import Card from '../components/MainCard';
import styles from '../styles/Home.module.css'
import Title from './../components/Title';

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Splitter</title>
        <meta name="description" content="Split your tip!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <Title />
          <Card />
        </div>
      </main>
    </div>
  )
}
