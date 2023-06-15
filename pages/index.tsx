import Head from 'next/head'
import type {GetServerSideProps, NextPage} from "next"
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'



export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     <h1 className='text-4xl font-bold text-red-500'>Welcone To NFT World</h1>
   
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async () =>{
//   return(

//   )
// }
