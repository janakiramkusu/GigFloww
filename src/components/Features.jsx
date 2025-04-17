import React, { useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="features" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="display-4">Features</h2>
        <div className="row mt-4">
          {[
            {
              title: 'Showcase Your Work',
              text: 'Create a professional portfolio to showcase your skills and attract potential clients.',
            },
            {
              title: 'Find Quality Gigs',
              text: 'Browse and apply for gigs posted by clients looking for your specific skill set.',
            },
            {
              title: 'Build Your Network',
              text: 'Connect with other freelancers, collaborate, and expand your professional network.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="col-md-4 card-wrapper"
              ref={el => (cardsRef.current[index] = el)}
            >
              <div className="card shadow-sm animate-on-scroll">
                <div className="card-body">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
