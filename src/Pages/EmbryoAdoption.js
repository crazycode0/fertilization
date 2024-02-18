import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Cta from "../components/Cta";
import embr from "../assets/img/embryo-adoption-crop.jpg";
import AboutHeader from "../components/AboutHeader";
import FAQaccord from "../components/FAQaccord";

const Embryo = [
  {
    que: "Why are there embryos available for adoption?",
    ans: "Stimulated Cycle IVF can result in the production of 12-30 eggs or more in some patients. One of the unanticipated issues associated with traditional IVF has been the question of what to do with the extra embryos that are left stored frozen in liquid nitrogen once a couple believes that their family is complete. Some couples are willing to allow others to adopt these embryos.",
  },
  {
    que: "How common is Embryo Adoption?",
    ans: "Although many IVF clinics offer Embryo Adoption / Embryo Donation, none has the depth of experience found at Rejoice Fertility. Although there are over 200,000 IVF procedures performed in the United States every year there are fewer than 2000 cycles of Embryo Adoption performed yearly.",
  },
  {
    que: "Who are the best candidates for Embryo Adoption?",
    ans: "The best candidates for EA are those couples where the wife has a normal uterus and no medical reason which could result in a lower chance of success such as the presence of a dilated, fluid-filled fallopian tube (hydrosalpinx).",
  },
  {
    que: "How successful is EA?",
    ans: "Success rates with Embryo Donation/Adoption are close to 50% per cycle",
  },
  {
    que: "What about couples with male factor?",
    ans: "Some couples feel more comfortable with EA as opposed to the use of donor egg or donor sperm.",
  },
  {
    que: "Can couples without a fertility problem adopt embryos?",
    ans: "Absolutely. Some patients have pursued EA because they feel called to adopt.",
  },
  {
    que: "How expensive is this treatment?",
    ans: "The treatment cost per cycle is less than $4,000 but that does not include pre-screening and the costs associated with the matching process through Snowflake Embryo Adoption or the National Embryo Donation Center.",
  },
];

const EmbryoAdoption = () => {
  return (
    <>
      <Navbar />
      <AboutHeader imageSrc={embr} title="Embryo Adoption" />
      <div class="css-yqv90e">
        <p>
          It is estimated that there are over 1,000,000 frozen embryos stored in
          IVF Clinics across the United States. Some couples are willing to
          donate their frozen embryos to recipient couples who are willing to
          undergo a frozen embryo transfer with these embryos.
        </p>
        <p>
          At ForestBloom Fertility we have extensive experience with Embryo
          Adoption. All matching of embryo donors and recipients is accomplished
          through the efforts of the National Embryo Donation Center and the
          Nightlight Christian Adoptions Snowflake Embryo Adoption Program.
        </p>
      </div>
      <FAQaccord questions={Embryo} />
      <Cta />
      <Footer />
    </>
  );
};

export default EmbryoAdoption;
