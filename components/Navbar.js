import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Navbar(props) {
    

    return (
    <nav>
    <div className="logo">
    <Image src='/logo.png'alt='' width={128} height={127}></Image>
    </div>
    <div className="nav-content">
    <Link href="/"><a className='home-link'> Home </a></Link>
    <Link href="/about"><a className='about-link'> About </a></Link>
    <Link href="/projects"><a className='project-link'> Projects </a></Link>
    <Link href="/contact"><a className='contact-link'> Contact </a></Link>
    </div>
    </nav>

    )
}
