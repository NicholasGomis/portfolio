import Title from 'antd/lib/skeleton/Title'
import React from 'react'

import styles from '../styles/About.module.css'
export default function Cards({imageURL,title,body}) {


return (
<div className={styles.cardcontainer}>
<div className={styles.imagecontainer}>
<img className={styles.imagetest} src = {imageURL} alt=''/>
</div>
<div className={styles.cardcontent}>
       <div className='card-title'>
{title}
</div>

<div className='card-body'>
<p>{body}</p>  
</div>
<div className='btn'>
<button>

<a> View more </a>

</button>
</div>
</div>
 </div>

 )
}
