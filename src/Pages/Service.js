import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Cta from "../components/Cta";
import AboutHeader from "../components/AboutHeader";
import servicPic from "../assets/img/services-page-crop.jpeg";
import Form from "../components/Form";
import "../assets/css/servicesPage.css";
import ivf from "../assets/img/ivf-image.png";
import treat from "../assets/img/fertility-treatment.png";
import baby from "../assets/img/baby.png";
import diag from "../assets/img/diagnosis-image.png";

const Service = () => {
  return (
    <>
      <Navbar />
      <AboutHeader title="Services" imageSrc={servicPic} />
      <section>
        <h2 class="css-k49fvq">Services Offered</h2>
        <div class="css-13vrc86">
          <div class="css-1y3hu58">
            <a href="/services/diagnosis-and-testing">
              <div>
                <img src={diag} alt="" />
                <div class="overlay">
                  <div class="link">learn more</div>
                </div>
              </div>
              <p>Diagnosis &amp; Testing</p>
            </a>
            <a href="/services/ivf">
              <div>
                <img src={ivf} alt="" />{" "}
                <div class="overlay">
                  <div class="link">learn more</div>
                </div>{" "}
              </div>
              <p>IVF</p>
            </a>
            <a href="/services/fertility-treatment-and-non-ivf">
              <div>
                <img src={baby} alt="" />{" "}
                <div class="overlay">
                  <div class="link">learn more</div>
                </div>{" "}
              </div>
              <p>Fertility Treatment : Non-IVF</p>
            </a>
            <a href="/services/embryo-adoption">
              <div>
                <img src={treat} alt="" />{" "}
                <div class="overlay">
                  <div class="link">learn more</div>
                </div>
              </div>
              <p>Embryo Adoption</p>
            </a>
          </div>
        </div>
      </section>
      <Form />
      <Footer />
    </>
  );
};

export default Service;
