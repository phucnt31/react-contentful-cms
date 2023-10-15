import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            esse libero tempora earum ut. Ipsum natus eos distinctio aut et,
            nostrum architecto qui quidem adipisci facilis vitae minus libero
            labore!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
