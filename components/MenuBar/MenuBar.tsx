import Link from 'next/link'
import styles from '../MenuBar/styles/MenuBar.module.css'

const MenuBar = () => {
    return (
      <div className={styles.menuBar}>
          <Link href="/"><a className={styles.menuItem} >Home</a></Link>
        <Link href="/about"><a className={styles.menuItem} >About</a></Link>
        <Link href="/blog"><a className={styles.menuItem} >Blog</a></Link>
        <Link href="/contact"><a className={styles.menuItem} >Contact</a></Link>
      </div>
    );
  }
  
  export default MenuBar