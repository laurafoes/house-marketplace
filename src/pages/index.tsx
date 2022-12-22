import Head from 'next/head'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
        <Hero />
        <Categories />
        <Newsletter />
    </>
  )
}
