 import React from 'react';
import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
 
import Experience from './Component/Experience/Experience';
import Footer from './Component/Footer/Footer';
 import Header from './Component/Header/Header';
 import Nav from './Component/Nav/Nav';
import Portfolio from './Component/Portfolio/Portfolio';
import Service from './Component/Service/Service';
import Testimonial from './Component/Testimonial/Testimonial';
 

function App() {
  return (
    <div className="App">
 <Header/>
 
<About/>
 <Experience/>
 <Service/>
 <Portfolio/>
 
 <Testimonial/>
 <Contact/>
 <Footer/>
 <Nav/>
    </div>
  );
}

export default App;
