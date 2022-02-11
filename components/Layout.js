import React from 'react'
import { Footer } from './footer'
import { Navbar } from './Navbar'

export function Layout({children}) {
    

    return (

<div className="logo">
<Navbar />
{children}
<Footer />

</div>
    )
}
