import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import Button from '../components/button'
import { FiGithub } from "react-icons/fi"

import { firebaseLogin } from '../firebase/client'

export default function Home() {
  const handleClick = () => {
    firebaseLogin().then(usr => console.log(usr))
  }
  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src='/devlogo.png'></img>
          <h1> Devtter </h1>
          <h2>Welcome to my twitter clone for devs</h2>
          <Button onClick={handleClick}> <FiGithub size={22} /> Login with GitHub </Button>
        </section>
      </AppLayout>
      <style jsx>{`
        h1 {
          font-size: 55px;
          color: ${colors.primary};
          margin: 10px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 20px;
          margin-top: 0;   
          margin-bottom: 80px;   
        }
        img{
          height: 8rem;
        }

        section{
          display: grid;
          place-items: center;
          place-content: center; 
          height: 100vh;
          padding: 10px;
        }
      `}</style>
    </>
  )
}
