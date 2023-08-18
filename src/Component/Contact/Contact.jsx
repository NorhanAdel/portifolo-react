
import React from 'react';
 
import './Contact.css';
 
const Contact =()=> {
  return (
 
    <section id='contact'>
 <h5>get in touch me</h5>
 <h2>contact me</h2>
 <div className="container contact_container">
  <div className="contact_options">
<div className="contact-option">
 
<h4>Email</h4>
<h5>na9111353@gmail.com</h5>
<a href=''>send me a message</a>
</div>
<div className="contact-option">
 
<h4>massnger</h4>
<h5>nourhan adel</h5>
 
<a href=''>send me a message</a>
</div>
<div className="contact-option">
 
<h4>WhatsApp</h4>
<h5>01029843501</h5>
<a href=''>send me a message</a>
</div>
  </div>
  <form action=''>
<input type='text' placeholder='Your Full Name ' required/>
<input type='email' placeholder='Your Email ' required/>
<textarea cols='30' row='40' placeholder='Your Message' required></textarea>
<button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
 </div>
        </section>
  )
}
export default Contact;
