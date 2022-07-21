import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import axios from 'axios'
import { useState } from 'react'
import Add from '../components/Add'
import AddButton from '../components/AddButton'

export default function Home({ pizzaList ,admin}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzeria.com || order Now!!</title>
        <meta name="description" content="Hey my name is Shail Raj Mishra , this app is made by nextjs|mongodb|paypal tech stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose}/>}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose}/>}
    </div>
  )
}


export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if(myCookie.token === process.env.TOKEN){
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};