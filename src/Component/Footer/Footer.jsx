
import React from 'react';
 import './Footer.css'
 import {BsLinkedin ,BsGithub,BsFacebook} from 'react-icons/bs';
const Footer =()=> {
  return (
  <footer>
 <a href='#' className='footer_logo'>NOURHAN</a>
 <ul className='permlinks'>
<li><a href='#'>home</a></li>
<li><a href='#about'>about</a></li>
<li><a href='#experience'>experience</a></li>
<li><a href='#service'>service</a></li>
<li><a href='#portifilo'>portifolio</a></li>
<li><a href='#testimonial'>testimonial</a></li>
<li><a href='#contact'>contact</a></li>
 </ul>
 <div className="footer_social">
 <a href='' target='_blank'><BsLinkedin/></a>
        <a href='' target='_blank'><BsGithub/></a>
        <a href='' target='_blank'><BsFacebook/></a>
 </div>
 <div className="footer_copyright">
    <small>&copy; NOURHAN . all rights reserved</small>
 </div>
  </footer>
  )
}
export default Footer;
