import Head from 'next/head'
import MenuBar from '../../components/MenuBar/MenuBar'
import styles from '../../styles/Home.module.css'


export default function Contact():any {
  return (
    <div className={styles.container}>
      <MenuBar/>
      <Head>
        <title>Richy Tomys blog</title>
        <meta name="description" content="Richy Tomy's personal blog page" />
      </Head>

      <main className={styles.main}>



        <h1 className={styles.title}>       
          email: richytomy@email.arizona.edu
        </h1>


      </main>

      <footer className={styles.footer}>

        Richy Tomy 2022


      </footer>
    </div>
  )
}
