import React from 'react'
import Image from 'next/image'


export function Footer() {
    

    return (
     
        <footer>
        <a href="https://github.com/NicholasGomis">
        <Image src='/linkedin.png'width={40} height={38}></Image>
        </a>
       
        <a href="https://twitter.com/nicholasgomis">
        <Image src='/twitter.png'width={40} height={38}></Image>
        </a>

        <a href="https://github.com/NicholasGomis">
        <Image src='/github.png'width={40} height={38}></Image>
        </a>

        
        {/* Copyright 2021 Nicholas Gomis  */}



        </footer>
    )
}


