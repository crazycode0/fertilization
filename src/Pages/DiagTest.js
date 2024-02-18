import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Cta from "../components/Cta";
import diag from "../assets/img/diagnosis-image.png";
import AboutHeader from "../components/AboutHeader";
import FAQaccord from "../components/FAQaccord";

const diagQue = [
  {
    que: "How common is infertility?",
    ans: "After 1 year of having unprotected sex, 15% of couples are unable to conceive—that is, to get pregnant. After 2 years, 10% of couples still have not had a successful pregnancy.",
  },
  {
    que: "What are the causes of female infertility?",
    ans: "For about a third of couples who have difficulty conceiving, the woman is found to have the problem. In order for a woman to conceive, she needs to ovulate (produce and release eggs from her ovaries), have patent Fallopian tubes (that is, tubes free of blockages), and have a healthy uterus that can support a pregnancy. Fertility can be affected by problems with the menstrual cycle, by a disease or a condition, by lifestyle factors, and/or by age-related factors.",
  },
  {
    que: "How is female infertility evaluated?",
    ans: `   <div>
    In addition to a health history and physical exam, we routinely order
    blood tests to check for conditions that may impact your fertility.
    Common blood tests include:
    <ul>
      <li>TSH to evaluate for thyroid disorders</li>
      <li>
        Prolactin to rule out inappropriate production of the hormone
        responsible for supporting lactation
      </li>
      <li>
        Anti-Müllerian hormone (AMH) level to evaluate ovarian reserve (your
        remaining egg supply).
      </li>
      <li>
        Follicle-stimulating hormone and estradiol levels in the first few
        days of the menstrual cycle to evaluate ovarian function.
      </li>
      <li>
        Progesterone level late in the second half of your menstrual cycle
        to tell if ovulation has occurred and if your ovaries are producing
        a normal amount of this hormone.
      </li>
    </ul>
    Because some of these tests must be done at specific times in the
    menstrual cycle and repeated for accuracy, this part of your evaluation
    may take several weeks. Other tests may be done to examine your
    Fallopian tubes and determine if a blockage is preventing movement of
    the egg from the ovaries or preventing the egg and sperm from reaching
    each other. The options to test the tubes include a hysterosalpingogram
    (x-ray test of the Fallopian tubes and uterus), FemVue transvaginal
    ultrasound (TVUS), and laparoscopy. TVUS can also be used to assess your
    ovaries, including the number of remaining follicles you have, and it
    can be used to assess the uterus.
  </div>`,
  },
  {
    que: "What are the causes of male infertility?",
    ans: "For more than a third of couples who have difficulty conceiving, the man is found to have the problem. In order for conception to occur, a man must have sperm that can reach and combine with a woman’s egg. Sperm are made and stored in the testicles. During sex, sperm mix with seminal fluid, or semen, and are ejaculated by the penis into the woman’s reproductive tract. Infertility in a man is often related to low sperm production, which may be due to a varicocele, an enlarged vein in the testicle. Other causes of male infertility are hormone imbalances, medication or steroid use, and blockages in the reproductive organs.",
  },
  {
    que: "How is male infertility evaluated?",
    ans: `<p>A health history and physical exam are also part of the man’s evaluation. The most common lab test for male infertility is a semen analysis to assess the quantity and quality of the sperm. A man may need to provide a semen sample on more than one occasion because sperm production can vary over time, depending on his activities and stress level.</p>
    <p>Please note that all semen analysis patients need to arrive with their instruction form filled out. Patients must also have a physician referral in order to do a semen analysis with Rejoice Fertility.</p>`,
  },
  {
    que: "How is male infertility treated?",
    ans: "Medication can treat problems such as hormone imbalances. Surgery can help repair blockages in the tubes that transport sperm from the testicles to the penis. Surgery can be used to repair a varicocele. If medication or surgery does not restore fertility, IVF may be considered.",
  },
];

const DiagTest = () => {
  return (
    <>
      <Navbar />
      <AboutHeader imageSrc={diag} title="Diagnosis & Testing" />
      <div class="css-yqv90e">
        <p>
          Sometimes it is hard to know where to start! Rest assured that by
          choosing ForestBloom Fertility you have picked the right place. Dr.
          Keenan and Dr. Gordon have over 50 years of combined experience in
          treating the infertile couple.
        </p>
        <p>
          Whether it is a history of irregular periods or a known diagnosis of
          endometriosis, we will be there to guide you through appropriate
          diagnostic testing, leading to a treatment plan that makes sense for
          you. The staff of ForestBloom Fertility are here to help and support
          you through the process.
        </p>
      </div>
      <FAQaccord questions={diagQue} />
      <Cta />
      <Footer />
    
    </>
  );
};

export default DiagTest;
