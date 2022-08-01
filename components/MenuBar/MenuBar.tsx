import clsx from 'clsx';
import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '../MenuBar/styles/MenuBar.module.css'

const MenuBar = () => {
    const router = useRouter();
    return (
      <div className={styles.menuBar}>
          <Link href="/"><a className={`${router.pathname  === "/" 
       ? `${styles.active}` 
       : `${styles.nonActive}`}`}>Home</a></Link>
        <Link href="/about"><a className={`${router.pathname  === "/about" 
       ? `${styles.active}` 
       : `${styles.nonActive}`}`} >About</a></Link>
        <Link href="/blog"><a className={`${router.pathname  === "/blog" 
       ? `${styles.active}` 
       : `${styles.nonActive}`}`} >Blog</a></Link>
        <Link href="/contact"><a className={`${router.pathname  === "/contact" 
       ? `${styles.active}` 
       : `${styles.nonActive}`}`} >Contact</a></Link>
      </div>
    );
  }
  
  export default MenuBar