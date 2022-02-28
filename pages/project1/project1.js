import React from 'react'
import Link from 'next/link'
import {HiDownload} from "react-icons/hi"
import styles from '../../styles/Projects.module.css'


export default function Projectone(props) {
    

    return (

<div className='testing'>
    <Link href={"/projects"}>
    <a className={styles.btntwo}> ← Projects </a>
    </Link>,
     <h1>Heawell - Health and wellbeing app </h1>
       
     <h2> Key tools </h2>


      <Link href={"https://drive.google.com/drive/folders/1-QgsxznauxlYLIX3zSxsqTsvxKhEckAI?usp=sharing"}>
    <a className={styles.btntwo}> <HiDownload /> Download </a>
    </Link>,


    </div>

     

    )
    
}
