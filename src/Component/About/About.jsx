import React from 'react'
import './About.css';
import ME from '../../assets/me-about.jpg';
import { BsFillAwardFill } from 'react-icons/bs';
import { BiFolderMinus, BiUserPin } from 'react-icons/bi';
 
const About =()=> {
  return (
 <section id='about'>
<h5>get to know</h5>
<h2>About me</h2>
<div className="container about_container">
  <div className="about_me">
<div className="about_me_image">
  <img src={ME} alt="about imge" />
</div>
  </div>
  <div className="about_content">
    <div className="about_cards">
      <article> 
<div className="about_card">
<BsFillAwardFill className='icon'/>
  <h5>experience</h5>
  <small>3+ year working</small>
</div>
      </article>
      <article>
      
<div className="about_card">
<BiUserPin className='icon'/>
  <h5>clients</h5>
  <small>200 worldwide</small>
</div>
      </article>
      <article>
   
<div className="about_card">
<BiFolderMinus className='icon'/>
  <h5>projects</h5>
  <small>80+ compete</small>
</div>
      </article>

    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veritatis eligendi debitis illum ad facere deserunt doloribus est obcaecati facilis cupiditate commodi quaerat, labore reprehenderit esse nisi rerum ipsum. Omnis.</p>
    <a href='#contact' className='btn btn-primary'>let's talk</a>
  </div>
</div>
 </section>
 
  )
}
export default About;
