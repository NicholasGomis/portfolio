import React from 'react'
import Link from 'next/link'

import styles from "../../styles/Home.module.css"


export default function Projectone(props) {
    

    return (

<div className='testing'>
    <Link href={"/projects"}>
    <a className={styles.btn}> Return back </a>
    </Link>,
     <h1>Heawell - Health and wellbeing app</h1>
    </div>

      

    )
    
}
