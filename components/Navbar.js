import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Navbar(props) {
    

    return (
    <nav>
    <div className="logo">
    <Image src='/logo.png'width={128} height={127}></Image>
    
    </div>
    <Link href="/"><a> Home </a></Link>
    <Link href="/about"><a> About </a></Link>
    <Link href="/projects"><a> Projects </a></Link>
    <Link href="/contactme/contact"><a> Contact </a></Link>
    </nav>

    )
}
