import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import BlogMe from "../components/BlogMe";


const HomePage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
          <title>Orfeas Voutsarids Blog</title>
          <meta
              name='description'
              content='I post about programming and web development.'
          />
      </Head>
      <BlogMe />
    </React.Fragment>
  )
}

export default HomePage
