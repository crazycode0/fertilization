import React from "react";
import "../assets/css/Header.css";
import homepage from "../assets/img/homepage.jpeg";

const Header = () => {
  return (

    <div className="hero-header-cont">
    <div className="hero-header">
      <div className="img-div">
        <img src={homepage} className="image" />
      </div>
      <div className="hero-txt">
        <h1 class="hero-txt-h1">Hope Starts With a Conversation</h1>
        <p class="hero-txt-p">
          ForestBloom Fertility is committed to providing comprehensive care with
          unwavering compassion
        </p>{" "}
        <div class="hero-txt-but">
          <a title="Request Appointment" class="hero-txt-but-a1" href="/contact-us">
            Request Appointment
          </a>

          <a
            title="Request Free Consultation"
            class="hero-txt-but-a2"
            href="/free-consultations"
          >
            Request Free Consultation
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
