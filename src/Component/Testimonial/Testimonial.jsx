
import React from 'react';
 import AVATAR1 from '../../assets/avatar1.jpg';
 import AVATAR2 from '../../assets/avatar2.jpg';
 import AVATAR3 from '../../assets/avatar3.jpg';
 import AVATAR4 from '../../assets/avatar4.jpg';
 import { Pagination } from 'swiper/modules';

 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';
 
import './Testimonial.css';
 const data=[
  {
    id:1,
    image:AVATAR1,
    name:'Ernest Achiever',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, soluta! Magnam exercitationem esse veritatis ut architecto cupiditate inventore! Amet tempora distinctio minima, tempore a veritatis sequi repudiandae quis iusto accusamus'

  },
  {
    id:2,
    image:AVATAR2,
    name:'Ernest Achiever',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, soluta! Magnam exercitationem esse veritatis ut architecto cupiditate inventore! Amet tempora distinctio minima, tempore a veritatis sequi repudiandae quis iusto accusamus'

  },
  
    {
      id:3,
      image:AVATAR3,
      name:'Ernest Achiever',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, soluta! Magnam exercitationem esse veritatis ut architecto cupiditate inventore! Amet tempora distinctio minima, tempore a veritatis sequi repudiandae quis iusto accusamus'
  
    },
    {
      id:4,
      image:AVATAR4,
      name:'Ernest Achiever',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, soluta! Magnam exercitationem esse veritatis ut architecto cupiditate inventore! Amet tempora distinctio minima, tempore a veritatis sequi repudiandae quis iusto accusamus'
  
    },

 ]
const Testimonial =()=> {
  return (
  <section id='testimonials'>
 <h5>review from client</h5>
 <h2>testimonial</h2>
 <Swiper className="container testimonial_container"  modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
 {
  data.map(({id,image,name,review})=>{
    return(
      <SwiperSlide key={id} className='testimonial'>
    <div className="clint_avatar">
<img src={image} alt=''/>
    </div>
    <h5>{name}</h5>
<small className='clint_review'>{review}</small>
    </SwiperSlide>
    )
  })
 }
  </Swiper>
  </section>
  )
}
export default Testimonial;
