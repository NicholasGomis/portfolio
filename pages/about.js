import React from 'react'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import styles from '../styles/About.module.css'
import Cards from '../components/Cards'
import Rectanglecard from '../components/Rectanglecard'
// import 'antd/dist/antd.css'; 



export default function About(props) {
    

    return (
       
        <div>
            



         <div>
         <img className={styles.imgprofile} src={"./profileimg.png"} alt="profilelogo" />
         <h3 className={styles.signature2} > Full Stack Software Engineer</h3>
         <h3 className={styles.signature} > Nicholas P. Gomis</h3>
        </div>
            
            <p className={styles.textpara}> Hello everyone! I am Nicholas. I was born and raised in Italy.Throughout my childhood I always have been fascinated with technology. During my afternoons, rather than playing football with friends, I used to buy broken computers to learn more about it's components and build my own machine. this new hobby led me to study Electrical and Electronic in High School..
            </p>
           
            <p className={styles.textpara} > Once I earned my diploma, I decided to continue my academic studies in the United Kingdom, due to its opportunities and the diversities which had always intrigued me. During my time in the UK, I gained my Bachelor in Computer Hardware and Software Engineer at Coventry University and a MSc in Manufacturing Engineering with Management at University of Warwick.</p>

           <p className={styles.textpara}> Recently, I got the opportunity to take part of the School of Code 14 weeks bootcamp.Throughout my time in the bootcamp, I learnt to work within a team, handle properly complex problems and have the right mindset to cope any challenges and of course new technologies and tools  </p>
            <h2> 👨🏻‍💻  Tech Stacks </h2>
 
             <Cards 
             title='Front-End Tools:'
             imageURL= 'https://i.ibb.co/WPgJmn0/frontend-removebg-preview.png'
             body = 'JavaScript, HTML , CSS TypeScript'   
            />
            <Cards 
             title='Back-End Tools:'
             imageURL= ''
             body = 'Postgres. '   
            />

              <Cards 
             title='Testing:'
             imageURL= ''
             body = 'Cypress, Jest, Enzyme.'   
            />
            <Rectanglecard 
             title='Libraries, Framework & Platform:'
             imageURL= ''
             body = 'React, Express.js, NPM, Node.js, Postman, Next.js, Ant design, Chakra.ui, Gatsby, Bootstrap.'  
            />
                <Cards 
             title='Testing:'
             imageURL= ''
             body = 'Cypress, Jest, Enzyme.'   
            />

       

        </div>
    )
}
