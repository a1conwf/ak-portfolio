import React from "react";
import CtaButton from "../../ui/CtaButton";
import { TypeAnimation } from "react-type-animation";

//styles
import "./Hero.scss";

const Hero: React.FC = () => {
  return (
    <section
      className="hero"
      id="about"
      data-aos="fade-down"
      data-aos-delay="800"
    >
      <h1 className="hero__title">
        Nice to meet you! <br /> I'm{" "}
        <TypeAnimation
          sequence={["Anton Kashuba.", 1000, "front-end developer.", 1000]}
          speed={50}
          wrapper="span"
          repeat={Infinity}
        />
      </h1>

      <p className="hero__text">
        Based in Estonia, I’m a front-end developer passionate about building
        quality and responsive web apps that users love.
      </p>

      <CtaButton text="Contact me" link="#contact" />
    </section>
  );
};

export default Hero;
