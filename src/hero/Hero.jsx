import React from "react";
import mobhead from "../../images/mobile/mobhead.jpg";
import deshead from "../../images/desktop/deshead.jpg";
import icondown from "../../images/icondown.svg";
import "./hero.scss";
function Hero() {
  return (
    <section className="hero_cont">
      <img src={mobhead} alt="" className="hero_img dn_for_large" />
      <img src={deshead} alt="" className="hero_img dn_for_small" />
      <div className="hero_title_cont ">
        <h1>
          WE ARE <br className="dn_for_large" />
          CREARIVES
        </h1>
        <img src={icondown} alt="" />
      </div>
    </section>
  );
}

export default Hero;
