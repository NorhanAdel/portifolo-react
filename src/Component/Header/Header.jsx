import React from 'react'
import './Header.css';
import CAT from './CAT'
import Me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
const Header=()=> {
  return (
 <header className='container header-container'>
  <h5>hello I'm</h5>
<h1>nourhan adel</h1>
<h5 className='text-light'>fullstack developer </h5>
<CAT/>
<HeaderSocial/>
<div className='me'>
 
<img src={Me} alt='me'/>
</div>
<a href='#contact' className='scroll_down'>scroll down</a>
 </header>
  )
}

export default Header