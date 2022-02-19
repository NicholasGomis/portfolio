import React from 'react'
import { Navbar } from '../../components/Navbar'
import Image from 'next/image'

export default function Contact(props) {
    

    return (
        
        <div>
        {/* <h1>Contact page</h1>
        <p>This is my contact page</p> */}

         <a href="https://github.com/NicholasGomis">
        <Image src='/linkedin.png'width={40} height={38}></Image>
       My Linkedin </a>
       <br></br>
        <a href="https://twitter.com/nicholasgomis">
        <Image src='/twitter.png'width={40} height={38}></Image>
        My twitter </a>

         <br></br>

        <a href="https://github.com/NicholasGomis">
        <Image src='/github.png'width={40} height={38}></Image>
        My Github</a>
    <br></br>

     <a href="">
        <Image src='/email.png'width={40} height={38}></Image>
        My email</a>
        </div>

    )
}
