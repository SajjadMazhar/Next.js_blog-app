import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {
          `
          h2{
            font-size:38px;
          }
          h3{
            font-size:28px
          }
          `
        }
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className=''>Hunting Coder</span> 
        </h1>
        <div className={styles.imgWrap}>
          <Image src="/homeimg.jpg" className={styles.myImg} width={237} height={158} />
        </div>
        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

        <div className="blogs">
          

        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
