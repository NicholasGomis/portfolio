import Title from 'antd/lib/skeleton/Title'
import React from 'react'
import css from  './About.module.css'

export function Cards(props) {
    

    return (
       <div className='card-container'>
<div className='image-container'>
        <img src = {imageURL} alt=''/>
</div>
<div className='card-content'>
       <div className='card-title'>
{titleHeader}
</div>

<div className='card-body'>
<p>{body}</p>
</div>
</div>



<div className='btn'>
<button>

<a> View more </a>

</button>
</div>

 </div>


    )
}
