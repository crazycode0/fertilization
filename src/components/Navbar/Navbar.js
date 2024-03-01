import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../../assets/img/brand_logo.png";
import logo1 from "../../assets/img/forest-logo.png";
import "../../assets/css/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    
    <nav className="nav-head ">
      <div className="social ">
        <div className="soc-con general">
          <a href="twitter.com">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="twitter.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="twitter.com">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      <div className="lower-nav general">
        <div className="left-section ">
          <div className="logo">
            <a href="/" className="nav-logo">
              <img src={logo1} alt="tracking app logo" />
            </a>
          </div>
        </div>

        <div className="rigght">
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="/about-us" className="nav-link">
                About Us  <FontAwesomeIcon icon={faChevronDown} />
              </a>
             
              {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/contact-us" className="dropdown-item nav-link">Contact Us</a>
              
            </div>
          )}
            </li>
            <li className="nav-item mob-drop">
              <a href="/contact-us" className="nav-link">
              Contact Us
              </a>
            </li>
            <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="/services" className="nav-link">
                Services  <FontAwesomeIcon icon={faChevronDown} className="icon-mob"/>
              </a>
              {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/services/diagnosis-and-testing" className="dropdown-item nav-link">Diagnosis & Testing</a>
              <a href="/services/fertility-treatment-and-non-ivf" className="dropdown-item nav-link">Fertility Treatment: Non-IVF</a>
              <a href="/services/ivf" className="dropdown-item nav-link">IVF</a>
              <a href="/services/embryo-adoption" className="dropdown-item nav-link">Embryo Adoption</a>
            </div>
          )}
            </li>
            <li className="nav-item mob-drop">
              <a href="/services/diagnosis-and-testing" className="nav-link">
              Diagnosis & Testing
              </a>
            </li>
            <li className="nav-item mob-drop">
              <a href="/services/fertility-treatment-and-non-ivf" className="nav-link">
              Fertility Treatment: Non-IVF
              </a>
            </li>
            <li className="nav-item mob-drop">
              <a href="/services/ivf" className="nav-link">
              IVF
              </a>
            </li>
            <li className="nav-item mob-drop">
              <a href="/services/embryo-adoption" className="nav-link">
              Embryo Adoption
              </a>
            </li>

            <li className="nav-item">
              <a href="/free-consultations" className="nav-link">
                Free Consultation
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="/pricing" className="nav-link">
                Pricing
              </a>
            </li> */}
            <li className="nav-item">
              <a href="/out-of-town-patients" className="nav-link">
                Out-of-Town Patients
              </a>
            </li>
            <li className="nav-item">
              <a href="/testimony" className="nav-link">
                Testimony
              </a>              
            </li>
            <li className="nav-item prod">
            <a
                title="Request Appointment"
                className="css-1xnqutw"
                href="/contact-us"
              >
                Sign Up
              </a>             
            </li>
            
          </ul>
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
