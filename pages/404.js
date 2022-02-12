import Link from 'next/link'
import React from 'react'

export default function  NotExist (props) {
    

    return (
        <div className='not-exist'>

        <h1>Page not found 😔 </h1>
        <p> Return back to the<Link href="/"><a> Homepage </a></Link></p>

 </div>

    )
}
