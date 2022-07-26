import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css';

import profilePic from '../public/me.jpg'

export default function Home():any {
  return (
    <div className={styles.container}>
      <Head>
        <title>Richy Tomy</title>
        <meta name="description" content="Richy Tomy's personal website" />
      </Head>

      <main className={styles.main}>

        <Image
        src={profilePic}
        alt="Picture of the author"
        className={utilStyles.borderCircle}
        height={200}
        width={200}
      />

<h1 className={styles.title}>       
          Richy Tomy
        </h1>

        <p className={styles.description}>
          Richy Tomy is a Software Engineer with expertise in DevOps, Cloud & Application architecture.
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Cloud &rarr;</h2>
            <p>Architected and developed serverless applications on AWS Cloud.</p>
          </a>

          <a className={styles.card}>
            <h2>DevOps &rarr;</h2>
            <p>Built CI/CD pipelines using Github Actions, AWS Code*, Azure DevOps, Jenkins.</p>
          </a>

          <a
            className={styles.card}
          >
            <h2>Front-end &rarr;</h2>
            <p>Developed web applications with React.js, Next.js, Javascript/Typescript, CSS, HTML.</p>
          </a>

          <a
            className={styles.card}
          >
            <h2>Back-end &rarr;</h2>
            <p>
              Developed API backends in Python, Node.js using FastAPI, Django, GraphQL, DynamoDB, AWS RDS etc.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>

        Richy Tomy 2022


      </footer>
    </div>
  )
}
