import React from 'react'
import Link from 'next/link'

export function Navbar(props) {
    

    return (
    <nav>
    <div className="logo">
    <h1>Header</h1>
    </div>
    <Link href="/"><a> Home </a></Link>
    <Link href="/about"><a> About </a></Link>
    <Link href="/projects"><a> Projects </a></Link>
    <Link href="/contactme/contact"><a> Contact </a></Link>
    </nav>

    )
}
