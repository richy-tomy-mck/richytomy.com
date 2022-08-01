import Head from 'next/head'
import styles from '../styles/Home.module.css'


import MenuBar from '../components/MenuBar/MenuBar';

export default function Home():any {

  return (
    <div className={styles.container} style={{ backgroundImage: `url(/bend.jpeg)`,
    width:'100%' , height: '130vh', backgroundRepeat: 'no-repeat',backgroundSize: '100%',}}>
      <MenuBar/>
      <Head>
        <title>Richy Tomy</title>
        <meta name="description" content="Richy Tomy's personal website" />
      </Head>

      <main className={styles.main}>



      </main>

    </div>
  )
}
