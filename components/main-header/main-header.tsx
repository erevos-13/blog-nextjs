import React from "react";
import styles from "./main-header.module.css";
import Link from "next/link";
const MainHeader: React.FC = () =>{
    return(
        <header className={styles.header}>
        <div className={styles.logo}>
            <Link href='/'>Orfeas Blogger</Link>
        </div>
      <nav className={styles.navigation}>
          <ul className={styles.list}>
              <li>
                  <Link href="/articles" >Article</Link>
              </li>
              <li>
                  <Link href="/contact" >Contact</Link>
              </li>
          </ul>
      </nav>
    </header>
    )
}

export default MainHeader;