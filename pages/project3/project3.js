import React from 'react'
import Link from 'next/link'

import styles from "../../styles/Home.module.css"


export default function ProjectTwo(props) {
    

    return (
        
     <div className='testing'>
    <Link href={"/projects"}>
    <a className={styles.btn}> Return back </a>
    </Link>,
 <h1> Who has seen it - Track missing people</h1>,
    </div>

    
        
    )
}
