import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arkanne</title>
        <meta name="description" content="Arkanne (magepunk bitch)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <b>Arkanne</b>
        </h1>

        <p className={styles.description}>
          Go ahead and join at{' '}
          <code className={styles.code}>arkanne.net</code>
          with{' '}
          <code className={styles.code}>1.20</code>
        </p>

        <div className={styles.grid}>
          <a href="https://arkanne.shop" className={styles.card}>
            <h2>Store &rarr;</h2>
            <p>The Arkanne store!</p>
          </a>

          <a href="https://nohello.com" className={styles.card}>
            <h2>Info &rarr;</h2>
            <p>Learn about this amazing project!</p>
          </a>

          <a
            href="https://github.com/AHHHH"
            className={styles.card}
          >
            <h2>IDK what to put here &rarr;</h2>
            <p>Welp</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Discord &rarr;</h2>
            <p>
              Join our Discord server!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
