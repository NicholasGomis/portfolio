import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../components/footer'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.title}> 
   
    <Image src='/avatar.png'width={188} height={187}></Image>
    <h1 className={styles.title}> Hello World! I am Nicholas Gomis </h1>
    <h2 className={styles.subtitle}> Full Stack Software Engineer</h2>
    <Image src='/js.png'width={40} height={38}></Image>
    <Image src='/css.png'width={40} height={38}></Image>
     <Image src='/html.png'width={40} height={38}></Image>
    <Image src='/react.png'width={40} height={38}></Image>
    <Image src='/ts.png'width={40} height={38}></Image>
    {/* <p className={styles.text}> Passionate in building apps and exploring new technologies </p> */}
    <p className={styles.text}> <a className={styles.text}href="https://www.schoolofcode.co.uk"> School Of Code </a> Student that have recently graduated from the bootcamp 👨🏻‍💻, I' m passionate in building apps and exploring new technologies. Always keen to learn new innovative things and embark in new adventures!</p>

    <Link href={"/projects"}>
    <a className={styles.btn}> Recent works </a>
    </Link>


    </div>
  ) 
}
