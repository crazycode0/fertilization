import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Cta from "../components/Cta";
import Footer from "../components/Footer/Footer";
import AboutHeader from "../components/AboutHeader";
import Consul from "../assets/img/free-consultations.jpeg";
import Form from "../components/Form";
import '../assets/css/Consul.css'

const Consultations = () => {
  return (
    <>
      <Navbar />
      <AboutHeader title="Free Consultations" imageSrc={Consul} />
      <div class="css-yqv90e">
        <p>
          We realize infertility is a difficult, often discouraging road.
          Sometimes the array of treatment options can seem overwhelming.
          Wouldn’t it be nice to sit down with a trusted confidant and explore
          the possibilities that could best fit your personal situation?
        </p>
        <p>
          That’s why Rejoice Fertility Medical Director Dr. John Gordon offers
          complimentary 15-minute telemedicine consultations. Dr. Gordon
          believes hope starts with a conversation. He’s eager to hear your
          story and explore how Rejoice Fertility might be able to help you
          achieve your dream of parenthood.
        </p>
        <p>
          Sound like just what you’ve been looking for? Fill out our form below
          and someone will be in contact with you. We look forward to hearing
          your story. Let’s get started in pursuit of your goals!
        </p>
      </div>
      <Form />
      <Cta />
      <Footer />
    </>
  );
};

export default Consultations;
