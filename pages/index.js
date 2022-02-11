import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/footer'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div> 
    <Navbar />
    <h1> Nicholas Gomis </h1>
    <p> A full Stack Software Engineer</p>
    <p> Passionate in building new apps</p>
    <Footer />
    </div>
  ) 
}
