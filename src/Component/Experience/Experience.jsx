
import React from 'react';
import { BsPatchCheck } from 'react-icons/bs';
import './Experience.css';
 
const Experience =()=> {
  return (
 
    <section id='experience'>
    <h5>the skill i have</h5>
    <h2>my experience</h2>
    <div className="container experience_container">
 
    <div className="experience_backend">
    <h3>frontend development</h3>
    <div className="experience_content">
        <article className='experience_details'>
    <BsPatchCheck className='icon-ex'/>
   <div>  <h4>HTML</h4>
    <small className='text-light'>experience</small></div>
        </article>
        <article className='experience_details'>
    <BsPatchCheck className='icon-ex'/>
 <div>    <h4>CSS</h4>
    <small className='text-light'>intermidate</small></div>
        </article>
        <article className='experience_details'>
    <BsPatchCheck className='icon-ex'/>
<div>    <h4>javascript</h4>
    <small className='text-light'>experience</small></div>
        </article>
        <article className='experience_details'>
    <BsPatchCheck className='icon-ex'/>
 <div>    <h4>Tailwind</h4>
    <small className='text-light'>experience</small></div>
        </article>
        <article className='experience_details'>
    <BsPatchCheck className='icon-ex'/>
    <div> <h4>React</h4>
    <small className='text-light'>experience</small></div>
        </article>
    </div>
    </div>
    <div className="experience_frontend">
    <h3>backend development</h3>
     
    <div className="experience_content">
        <article className='experience_details'>
    <BsPatchCheck className='icon-ex'/>
     <div><h4>Nodejs</h4>
    <small className='text-light'>experience</small></div>
        </article>
        <article className='experience_details'>
    <BsPatchCheck className='icon-ex'/>
 <div>    <h4>Php</h4>
    <small className='text-light'>intermidate</small></div>
        </article>
        <article className='experience_details'>
    <BsPatchCheck className='icon-ex'/>
     <div><h4>Mysql</h4>
    <small className='text-light'>experience</small></div>
        </article>
        <article className='experience_details'>
    <BsPatchCheck className='icon-ex'/>
  <div>   <h4>Tailwind</h4>
    <small className='text-light'>experience</small></div>
        </article>
        <article className='experience_details'>
    <BsPatchCheck className='icon-ex'/>
 <div>    <h4>React</h4>
    <small className='text-light'>experience</small></div>
        </article>
    </div>
    </div>

    </div>
        </section>
  )
}
export default Experience;
