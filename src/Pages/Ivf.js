import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Cta from "../components/Cta";
import ivf from "../assets/img/ivf-image.png";
import AboutHeader from "../components/AboutHeader";
import FAQaccord from "../components/FAQaccord";

const Fert = [
  {
    que: "How long has IVF been performed?",
    ans: "In vitro fertilization (IVF) was first successfully performed in Oldham, England in 1978, resulting in the birth of Louise Brown, who was conceived using Natural Cycle IVF (NC-IVF).",
  },
  {
    que: "How many children have been born after IVF?",
    ans: "More than 7 million children have been born using IVF.",
  },
  {
    que: "What are the differences in the different types of IVF?",
    ans: "The 3 types of IVF are distinguished by what drugs (if any) are used and how many eggs/embryos will be produced. Natural Cycle IVF uses no fertility medications and results in a single egg and embryo. Mini-Stim IVF uses very mild stimulation medications (pills and 2-3 shots) resulting in 2-5 eggs. Stimulated Cycle IVF uses 10-14 days of fertility shots with a goal of 8-15 eggs.",
  },
  {
    que: "Can all patients be treated with all types of IVF?",
    ans: "No, some patients will clearly be candidates only for Natural Cycle IVF whereas others will be best served by Stimulated Cycle IVF.",
  },
  {
    que: "What about couples with male factor?",
    ans: "Severe male infertility is often best treated by IVF combined with Intracytoplasmic Sperm Injection (ICSI)",
  },
  {
    que: "How expensive is IVF?",
    ans: "The cost per cycle (not including medication) ranges from under $6,000 for Natural Cycle IVF to $13,445 for Stimulated Cycle IVF. The medication costs for Stimulated Cycle IVF can be $2,000-5,000.",
  },
];

const Ivf = () => {
  return (
    <>
      <Navbar />
      <AboutHeader imageSrc={ivf} title="IVF" />
      <div class="css-yqv90e">
        <p>
          At ForestBloom Fertility we perform IVF right here in our office! IVF
          can be performed with no fertility medications (Natural Cycle IVF),
          minimal fertility medications (Mini-IVF) or traditional stimulation
          medications (Stimulated Cycle IVF).
        </p>
        
      </div>
      <FAQaccord questions={Fert} />
      <Cta />
      <Footer />
    </>
  );
};

export default Ivf;
