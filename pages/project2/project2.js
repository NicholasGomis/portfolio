import React from 'react'
import Link from 'next/link'

import styles from "../../styles/Learn.module.css"


export default function ProjectTwo(props) {
    

    return (
        
     <div className='testing'>
    <Link href={"/projects"}>
    <a className={styles.btn}> Return back </a>
    </Link>,
     <h1> CodeBuddy - Q&A Forum / Social for developers</h1>
    </div>

       
    )
}
