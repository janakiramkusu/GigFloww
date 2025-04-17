import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Features from './components/Features'
import CTA from './components/CTA'
import Signup from './components/Signup'
import TestimonialSlider from './components/TestimonialSlider'
import Footer from './components/Footer'; 

const App = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="join">
        <CTA />
      </section>
      <section id="testimonials">
        <TestimonialSlider />
      </section>
      <section id="signup">
        <Signup />
      </section>
      <Footer />
    </>
  )
}


export default App
