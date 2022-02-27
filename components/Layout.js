import React from 'react'
import { Footer } from './footer'
import { Navbar } from './Navbar'

export function Layout({children}) {
    

    return (

<div className="content">
<Navbar />
{children}
<footer />

</div>
    )
}
