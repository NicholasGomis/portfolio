import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout({children}) {
    

    return (

<div className="content">
<Navbar />
{children}
<Footer />

</div>
    )
}
