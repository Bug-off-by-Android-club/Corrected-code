import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductFeed from "../components/ProductFeed";
// import Cart from '../components/cart'

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Bugg Off</title>
        
      </Head>

      
      <Header />
      

      <main className="max-w-screen-2xl mx-auto " >
        <Banner />
        
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json());

  return {
    props: {
      products,
    },
  };
}
