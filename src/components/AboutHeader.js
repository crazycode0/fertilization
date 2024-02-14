import React from "react";
import PropTypes from "prop-types";
import "../assets/css/AboutHeader.css";


const AboutHeader = ({imageSrc, title}) => {
  return (
    <>
      <header className="css-lzs7si">
        <div className="css-1aiwzoz">
          <div className="css-1x1pqx">
          <img src={imageSrc} alt="" className="css-10sqr8f" />
            
          </div>
          <div className="css-1vrh451">
          <h1 className="css-1e31oxk">{title}</h1>{" "}
            
            <div className="css-vgq6fx">
              <a
                title="Request Appointment"
                className="css-1xnqutw"
                href="/contact-us"
              >
                Request Appointment
              </a>
              <a
                title="Request Free Consultation"
                className="css-13xak97"
                href="/free-consultations"
              >
                Request Free Consultation
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

AboutHeader.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default AboutHeader;
