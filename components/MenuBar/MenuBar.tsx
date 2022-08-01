import { clsx } from 'clsx';
import styles from '../MenuBar/styles/MenuBar.module.css'

const MenuBar = () => {
    return (
      <div className={styles.menuBar}>
          <h1 className={styles.menuItem}><a href="/">Home</a></h1>
        <h1 className={styles.menuItem} ><a href="/about">About</a></h1>
        <h1 className={styles.menuItem} ><a href="/blog">Blog</a></h1>
        <h1 className={styles.menuItem} ><a href="/contact">Contact</a></h1>
      </div>
    );
  }
  
  export default MenuBar