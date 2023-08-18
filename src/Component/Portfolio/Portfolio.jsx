import React from 'react'
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
const data=[{
    id:1,
    image:IMG1,
    title:'this is portfolio item title'
},
{
    id:2,
    image:IMG2,
    title:'this is portfolio item title'
}
,{
    id:3,
    image:IMG3,
    title:'this is portfolio item title'
},
{
    id:4,
    image:IMG4,
    title:'this is portfolio item title'
},
{
    id:5,
    image:IMG5,
    title:'this is portfolio item title'
},
{
    id:6,
    image:IMG6,
    title:'this is portfolio item title'
}
]
const Portfolio=()=> {
  
  return (
 <section id='portfolio'>
    <h5>my recent work</h5>
    <h2>portfolio</h2>
    <div className="container portfolio_container">
 {
    data.map(({id,image,title})=>{
 return(
    <article key={id} className='portfolio_item'>
    <div className='portfolio_item_image'>
        <img src={image} alt=''/>
    </div>
    <h3>{title}</h3>
    <div className="portifolio_item_cta">
    <a href='' className='btn' target='_blank'>Githup</a>
    <a href='' className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
            </article>
 )
    })
 }
 
    </div>
 </section>
  )
}

export default Portfolio;