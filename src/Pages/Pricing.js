import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutHeader from "../components/AboutHeader";
import Pricing_pic from "../assets/img/pricing-crop.jpeg";
import Cta from "../components/Cta";
import Footer from "../components/Footer/Footer";
import "../assets/css/Consul.css";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <AboutHeader title="Pricing" imageSrc={Pricing_pic} />
      
      <Cta />
      <Footer />
    </>
  );
};

export default Pricing;
