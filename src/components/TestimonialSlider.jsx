import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { FaQuoteLeft } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/pagination'
import './TestimonialSlider.css'

const testimonials = [
  {
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'GigFloww has been a game-changer for my creative career. Highly recommended!',
    position: 'Freelance Designer',
  },
  {
    name: 'Jane Smith',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'The platform is amazing. I found my dream gig in no time!',
    position: 'Web Developer',
  },
  {
    name: 'Michael Brown',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    text: 'GigFloww made the process so easy. The interface is clean and intuitive.',
    position: 'Photographer',
  },
]

const TestimonialSlider = () => {
  return (
    <section id="testimonials" className="testimonial-section">
      <div className="container text-center">
        <h2 className="mb-5">What Our Users Are Saying</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h5 className="testimonial-name">{testimonial.name}</h5>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default TestimonialSlider
