import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>c.bird</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="nav">
        <a href="#" className="nav-item is-active" active-color="orange">Furthers</a>
        <a href="#" className="nav-item" active-color="blue">Chirpers</a>
        <a href="#" className="nav-item" active-color="red">What's_Chirpin</a>
        <a href="#" className="nav-item" active-color="rebeccapurple">Flock</a>
        <span className="nav-indicator"></span>
      </nav>
      
      
      <footer classNameName={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
