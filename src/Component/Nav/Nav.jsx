import React, { useState } from 'react'
import { BsFillHouseExclamationFill } from 'react-icons/bs';
import {BiBook ,BiMessageSquareDetail} from 'react-icons/bi';
import { AiOutlineUser} from 'react-icons/ai';
import { RiServiceLine} from 'react-icons/ri';

import './Nav.css';
const Nav=()=> {
  const[active,setactive]=useState('#')
  return (
 <nav>
  <a href='#' onClick={()=> setactive('#')}  className={active==='#'?'active':''}><BsFillHouseExclamationFill/></a>
  <a href='#about' onClick={()=> setactive('#about')}  className={active==='#about'?'active':''}><AiOutlineUser/></a>
  <a href='#service' onClick={()=> setactive('#service')}  className={active==='#service'?'active':''}><BiBook/></a>
  <a href='#testimonials'onClick={()=> setactive('#testimonials')}  className={active==='#testimonials'?'active':''}><RiServiceLine/></a>
  <a href=' #contact'onClick={()=> setactive('#contact')}  className={active==='#contact'?'active':''}><BiMessageSquareDetail/></a>
 </nav>
  )
}

export default Nav