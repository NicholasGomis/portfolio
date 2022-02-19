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
    <h1 className={styles.title}> Nicholas Gomis </h1>
    <p className={styles.title}> full Stack Software Engineer</p>
    <Image src='/js.png'width={40} height={38}></Image>
    <Image src='/css.png'width={40} height={38}></Image>
     <Image src='/html.png'width={40} height={38}></Image>
    <Image src='/react.png'width={40} height={38}></Image>
    <Image src='/ts.png'width={40} height={38}></Image>
    <p className={styles.text}> Passionate in building apps and exploring new technologies </p>
    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet leo vitae vulputate consectetur. Donec eget semper nunc. Vestibulum non nunc in sem hendrerit rutrum nec sed risus. Aenean et eleifend ante. Mauris eget porttitor justo. Etiam ac hendrerit velit. Donec commodo ultricies justo, ut congue diam consectetur in. Nunc et rutrum orci, congue porta tellus. Suspendisse suscipit sodales erat vitae euismod. Aenean a ipsum sodales tortor pretium blandit. Vivamus iaculis eget mi non tristique. Maecenas euismod ullamcorper egestas.</p>

    <Link href={"/projects"}>
    <a className={styles.btn}> Recent works </a>
    </Link>
    

    </div>
  ) 
}
