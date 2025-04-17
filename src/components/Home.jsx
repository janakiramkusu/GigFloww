import React from 'react';
import './Home.css';

const headline = "Your Creative Gig Journey Starts Here";

const Home = () => {
  return (
    <section className="bg-primary text-white text-center">
      <div className="container py-5">
        <h1 className="hero-heading">
          {headline.split(" ").map((word, index) => (
            <span className="fade-word" key={index} style={{ animationDelay: `${index * 0.3}s` }}>
              {word}&nbsp;
            </span>
          ))}
        </h1>
        <p className="hero-subtext">
          Connect. Create. Conquer the freelance world with GigFloww.
        </p>
        <a href="#join" className="btn btn-light mt-4">Join Now</a>
      </div>
    </section>
  );
};

export default Home;
