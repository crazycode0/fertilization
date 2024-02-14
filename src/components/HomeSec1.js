import React from "react";
import "../assets/css/HomeSec1.css";
import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import quote from "../assets/img/quote_new.png";
import diag from "../assets/img/diagnosis-image.png";
import ivf from "../assets/img/ivf-image.png";
import treat from "../assets/img/fertility-treatment.png";
import baby from "../assets/img/baby.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomeSec1 = () => {
  return (
    <>
      {" "}
      <div className="sec1">
        <div className="sec1-inner">
          <div className="sec1-inner-info">
            <div className="sec1-inner-info-icon">
              <img src={icon1} className="icon-img" />
            </div>
            <div className="sec1-inner-info-text">
              <h3> HOW can we help</h3>
              <p>
                Learn more about the services and procedures offered at Rejoice
                Fertility.
              </p>
              <a href="/services">
                {" "}
                Learn more <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
          <div className="sec1-inner-info">
            <div className="sec1-inner-info-icon">
              <img src={icon2} className="icon-img" />
            </div>
            <div className="sec1-inner-info-text">
              <h3>WHERE do you start?</h3>
              <p>
                Take your first steps in becoming a patient and find out more
                about Rejoice Fertility.
              </p>
              <a href="/services">
                {" "}
                Learn more <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
          <div className="sec1-inner-info">
            <div className="sec1-inner-info-icon">
              <img src={icon3} className="icon-img" />
            </div>
            <div className="sec1-inner-info-text">
              <h3>WHO will take care of you?</h3>
              <p>
                Find out more about the team at Rejoice Fertility and our
                philosophy of patient care.
              </p>
              <a href="/services">
                {" "}
                Learn more <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="sec-quote">
        <div className="sec-text">
          <img src={quote} alt="quote" />
          <p className="big-text">
            Very Supportive! Dr Keenan and nurse Mari were kind and supportive
            during this time in our journey. We have highly recommended this
            team to others struggling with fertility.
          </p>
          <p className="name-text">- Mia S.</p>
        </div>
      </section>
      <section id="service">
        <div className="css-1dirwo1">
          <div className="css-1bbcglu">
            <h2 className="css-1xx2ad">How Can We Help?</h2>
            <p className="css-ynu2nb">
              Learn more about the options offered at Rejoice Fertility.
            </p>
          </div>
          <div className="css-1jp5lic">
            <a href="/services/diagnosis-and-testing">
              <div>
                <img src={diag} alt="" />
                <div className="overlay">
                  <div className="link">learn more</div>
                </div>
              </div>
              <p>Diagnosis &amp; Testing</p>
            </a>
            <a href="/services/ivf">
              <div>
                <img src={ivf} alt="" />
                <div className="overlay">
                  <div className="link">learn more</div>
                </div>{" "}
              </div>
              <p>IVF</p>
            </a>
            <a href="/services/fertility-treatment-and-non-ivf">
              <div>
                <img src={treat} alt="" />{" "}
                <div className="overlay">
                  <div className="link">learn more</div>
                </div>{" "}
              </div>
              <p>Fertility Treatment : Non-IVF</p>
            </a>
            <a href="/services/embryo-adoption">
              <div>
                <img src={baby} alt="" />{" "}
                <div className="overlay">
                  <div className="link">learn more</div>
                </div>
              </div>
              <p>Embryo Adoption</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSec1;
