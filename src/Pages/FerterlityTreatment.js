import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Cta from "../components/Cta";
import treat from "../assets/img/fertility-treatment.png";
import AboutHeader from "../components/AboutHeader";
import FAQaccord from "../components/FAQaccord";

const Fert = [
  {
    que: "Why are my cycles irregular?",
    ans: "Irregular cycles and infrequent ovulation may result from a variety of conditions. Polycystic ovarian syndrome is very common, affecting about 15% of reproductive aged women. Other problems can include thyroid dysfunction and elevated levels of prolactin hormone.",
  },
  {
    que: "What medications are used for Ovulation Induction?",
    ans: "Usually we start with oral medications like oral fertility medications or letrozole. Some women may require more advanced medical treatment to restore normal cycles.",
  },
  {
    que: "Who are the best candidates for IUI?",
    ans: "The best candidates for IUI are those couples where the wife has normal fallopian tubes and the husband has fairly normal sperm.",
  },
  {
    que: "Can all patients be treated with OI/IUI?",
    ans: "Women with severe endometriosis or a history of pelvic adhesions are not ideal candidates for IUI."},
  {
    que: "What about couples with male factor?",
    ans: `<p>Although couples with male factor infertility can attempt IUI, the success rates are fairly low in such cases, and prompt consideration should be given to IVF (and ICSI) if pregnancy fails to occur after three or four attempts.</p>`},
  {
    que: "How expensive is this treatment?",
    ans: "The cost per cycle varies but usually ranges from $500-$2000 depending on whether medication is used, the type of medication used and how much monitoring is performed.",
  },
];

const FerterlityTreatment = () => {
  return (
    <>
      <Navbar />
      <AboutHeader imageSrc={treat} title="Fertility Treatment: Non-IVF" />
      <div class="css-yqv90e">
        <p>
          Some women have very irregular or even absent periods. For these
          women, Ovulation Induction (OI) restoring normal ovulation will result
          in more regular cycles and can lead to pregnancy without any
          additional treatments. However, for women who fail to conceive in
          spite of regular cycles, the addition of Intrauterine Insemination
          (IUI) to treatment with ovulation induction medications will be
          successful, whereas each treatment by itself was not.
        </p>
        <p>
          Intrauterine Insemination (IUI) can be performed either in conjunction
          with a woman’s natural cycle or can be combined with the use of
          fertility drugs. IUI can also be effectively used in couples who
          struggle with sexual dysfunction or infrequent coitus.
        </p>
      </div>
      <FAQaccord questions={Fert} />
      <Cta />
      <Footer />
     
    </>
  );
};

export default FerterlityTreatment;
