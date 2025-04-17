import React from 'react'
import './CTA.css';
const CTA = () => {
  return (
    <section id="cta" className=" text-center bg-primary text-white">
      <div className="container">
        <h2 className="display-4">Ready to Start Your Gig Journey?</h2>
        <p className="lead">Join now and explore exciting opportunities tailored just for you!</p>
        <a href="#signup" className="btn btn-light btn-lg">SignUp</a>
      </div>
    </section>
  )
}

export default CTA
