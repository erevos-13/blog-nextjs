import React from "react";
import Image from "next/image";
import styles from "./BlogMe.module.css";
import MainPicture from "../public/images/destop.jpg";
const BlogMe: React.FC = () => {
    return(
        <section className={styles.sectionContainer}>
            <div className={styles.image}>
                <Image alt={'image'} src={MainPicture} width={300} height={300} />
            </div>
            <h1 style={{color: "white"}}>Hi, I am Orfeas Voutsaridis</h1>
            <p style={{color: "white"}}>And this is a boring blog </p>

        </section>
    )
}

export default BlogMe;
