import React from 'react'
 import Cv from  '../../assets/cv.pdf'
const  CAT=()=> {
   return (
     <div className='cta'>
        <a href={Cv} download className='btn'>download cv</a>
        <a href='#contact' className='btn btn-primary'>let's talk</a>
     </div>
   )
 }

 export default CAT