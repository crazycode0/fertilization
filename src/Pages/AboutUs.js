import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutHeader from "../components/AboutHeader";
import Footer from "../components/Footer/Footer";
import Doctors from "../components/Doctors";

import Cta from "../components/Cta";
import "../assets/css/Aboout.css";
import holi from "../assets/img/holistic.png";
import inte from "../assets/img/integrity.png";
import afirm from "../assets/img/affirming.png";
import res from "../assets/img/respect.png";
import StaffAccord from "../components/StaffAccord";
import doc1 from "../assets/img/doctor1.png";
import doc2 from "../assets/img/doctor2.png";
import homepage from "../assets/img/aboutus_heropic.png";



const staffs = [
    {
      image: doc1,
      name: 'John David Gordon, M.D.',
      role: 'Medical Director',
      info:      "<h4>BIO:</h4>" +
      "<p>Before joining ForestBloom Fertility in August 2019, Dr. John David Gordon served as Co-Director of Dominion Fertility in Arlington, VA since 1999. Over those 2 decades he was listed as one of Washington’s top doctors in Washingtonian, Northern Virginia and Arlington magazines.</p>" +
      "<p>Dr. Gordon graduated summa-cum-laude from Princeton University with a degree in Biology and then attended medical school at Duke University. He was an intern in Obstetrics and Gynecology at the University of Texas Health Sciences Center in Houston and then completed his residency training in Obstetrics and Gynecology at Stanford University Medical Center and his fellowship in Reproductive Endocrinology and Infertility at the University of California San Francisco.</p>" +
      "<p>Dr. Gordon is board-certified in Obstetrics and Gynecology and subspecialty board certified in Reproductive Endocrinology and Infertility. Dr. Gordon was a Clinical Professor of Obstetrics and Gynecology at The George Washington University in Washington D.C. and an Associate Clinical Professor at Virginia Commonwealth University / Medical College of Virginia Fairfax Campus. He served as the Division Director of Reproductive Endocrinology and Infertility at Inova Fairfax Hospital.</p>" +
      "<p>Dr. Gordon has a passion for teaching and serves as Division Director of Reproductive Endocrinology and Infertility at the University of Tennessee Medical Center. As a professor, he has provided regular lectures in Reproductive Endocrinology to the Obstetrics and Gynecology interns, residents, and medical students. Dr. Gordon is the author of many scientific articles and several books but he is best known to health professionals as the Editor-in-Chief of “Obstetrics, Gynecology, and Infertility,” a best-selling medical handbook with over 150,000 copies in print. This handbook is used worldwide by medical students, residents, physicians, and women’s health care providers.</p>" +
      "<p>Dr. Gordon has been honored on numerous occasions for his educational activities and is a three-time recipient of the Council on Resident Education in Obstetrics and Gynecology (CREOG) National Resident Teaching Award.</p>" +
      "<h4>EDUCATION:</h4>" +
      "<p><strong>Undergraduate: </strong>Princeton University, Princeton, New Jersey, A.B.. Biology, summa cum laude 1981-1985.</p>" +
      "<p><strong>Medical School: </strong>Duke University School of Medicine, Durham, North Carolina, M.D., 1985-1989.</p>" +
      "<p><strong>Internship: </strong>Obstetrics and Gynecology, UTHSC-Houston, Houston, Texas, 1989-1990.</p>" +
      "<p><strong>Internship and Residency: </strong>Obstetrics and Gynecology, Stanford University Medical Center, Stanford, California, 1990-1994.</p>" +
      "<p><strong>Fellowship: </strong>Reproductive Endocrinology and Infertility.Department of Obstetrics and Gynecology, University of California, San Francisco, California, 1994-1996.</p>" +
      "<h4>HONORS:</h4>" +
      "<p>APGO-CREOG National Resident Teaching Award-GWUMC 2015, 2008, 2003</p>" +
      "<p>GWU Volunteer Clinical Faculty Teaching Award 2011</p>" +
      "<p>Kane King Dodek Society Volunteer Faculty Teaching Award 2006</p>" +
      "<p>ASRM (AFS) - Organon Research Fellowship, 1995-6</p>" +
      "<p>Berlex Foundation Resident Award, 1993</p>" +
      "<p>Princeton University Senior Biology Prize, 1985</p>" +
      "<p>Phi Beta Kappa, 1985</p>" +
      "<p>Eagle Scout, Boy Scouts of America, 1977</p>" +
      "<h4>BOARD CERTIFICATION:</h4>" +
      "<p>Certified, American Board of Obstetrics and Gynecology</p>" +
      "<p>Certified, Reproductive Endocrinology and Infertility.</p>" +
      "<p>Clinical Laboratory Director (HCLD), December 1996.</p>" +
      "<h4>SOCIETY MEMBERSHIPS:</h4>" +
      "<p>American Society for Reproductive Medicine</p>" +
      "<p>Society of Reproductive Endocrinology and Infertility</p>" +
      "<h4>UNIVERSITY APPTS:</h4>" +
      "<p><strong>Division Director (9/1/22-Present)</strong><br>Division of Reproductive Endocrinology and Infertility<br>Department of Obstetrics and Gynecology<br>University of Tennessee Medical Center <br>Knoxville, TN</p>" +
      "<p><strong>Division Director (7/11-7/19)</strong><br>Division of Reproductive Endocrinology and Infertility<br>Department of Obstetrics and Gynecology<br>Inova Fairfax Hospital <br>Falls Church, VA</p>" +
      "<p><strong>Clinical Professor (7/99-7/19)</strong><br>Department of Obstetrics and Gynecology<br>The George Washington University School of Medicine Washington, D.C.</p>" +
      "<p><strong>Associate Clinical professor (7/08-7/19)</strong><br>Department of Obstetrics and Gynecology<br>VCU School of Medicine, Northern Virginia Campus Falls Church, VA</p>" +
      "<h4>CHAPTERS &amp; BOOKS:</h4>" +
      "<p>Gordon JD, Rydfors JT, Druzin ML, Tadir Y. et al. Obstetrics and Gynecology: Handbook for Clinicians, 7th Edition, Scrub Hill Press, Inc., Arlington, Virginia, 2016.</p>" +
      "<p>Lebovic DI, Gordon JD, Taylor RN. Reproductive Endocrinology &amp; Infertility: Handbook for Clinicians, 2nd Edition, Scrub Hill Press, Inc., Arlington, Virginia, 2014.</p><p>Gordon JD, DiMattina, M.  100 Questions &amp; Answers About Fertility, 2nd Edition.  Jones &amp; Bartlett Publishing, Boston, 2010.</p>" +
      "<p>Gordon JD and Speroff L. Handbook of Gynecologic Endocrinology and Infertility. Lippincott Williams Wilkins, Philadelphia, 2002.</p><p>Scott JR, DiSaia, PJ, Hammond CB, Spellacy WN, Gordon JD editors. Danforth's Handbook of Obstetrics and Gynecology, Lippincott, Philadelphia, 1996.</p>" +
      "<h4>RECENT PUBLICATIONS:</h4>" +
      "<p>Mak W, Kondapalli LA, Celia G, Gordon J, DiMattina M, Payson M. Natural cycle IVF reduces the risk of low birthweight infants compared with conventional stimulated IVF. Hum Reprod. 2016 Apr;31(4):789-94.</p><p>Tran C, Payson M, DiMattina M, Gordon J, Delivery following natural cycle in vitro fertilization in a patient with endometriosis-associated hemorrhagic ascites. Journal of Minimal Stimulation IVF, 1(3). May-June 2014</p><p>DiMattina M, Gordon J, Celia G, Reh A, Payson M. Natural Cycle IVF Implantation Rates Compared to Stimulated IVF and Role of Serum AMH Levels, Journal of Minimal Stimulation IVF, 1(2). March-April 2014.</p>" +
      "<p>DiMattina M, Gordon JD, Botes A, et al. Follicular and estradiol parameters that improve success with natural cycle in vitro fertilization. J Reprod Med. 2014 May-Jun;59(5-6):267-73.</p><p>Gordon JD, DiMattina M, Reh A, Botes A, Celia G, Payson M. Utilization and success rates of unstimulated in vitro fertilization in the United States: an analysis of the Society for Assisted Reproductive Technology database. Fertil Steril. 2013 Aug;100(2):392-5</p>" +
      "<h4>RECENT ABSTRACTS:</h4>" +
      "<p>ACOG Regional Meeting Abstract 2017. Cole R and Gordon J. Endometrial Receptivity Analysis in Natural Cycle versus Artificial Cycle Frozen Embryo Transfer.</p>" +
      "<p>ASRM abstract 2017. Potts, C, Gordon, J, DiMattina, M, Fiorentino, A, Celia, G. Implantation and live births following transfer of 0pn embryos in natural cycle IVF.</p>" +
      "<p>ASRM abstract 2017. Shah, A, Stadtmauer, L, Celia, G, Gordon, J, DiMattina, M. Comparison of frozen embryo transfer during a natural cycle or hormone supplemented cycle.</p>" +
      "<p>ASRM abstract 2015: Li E, Hanson B, Rogers A, Gordon J, DiMattina M, Celia G, Payson M. Evaluating Oocyte Yield, Quality &amp; Fertilization Following a Change in Anesthesia Protocol.</p>" +
      "<p>ASRM abstract 2014: Mak W, Kondapalli L, Celia G, Gordon J, DiMattina M, Payson M. Decreased low birth weight in singleton livebirths with unstimulated/ natural cycle versus stimulated IVF.</p>" +
      "<p>ASRM abstract 2013. Natural cycle IVF pregnancies in patients with very low serum AMH. Mateer, E, DiMattina, M, Gordon, J, Rosado, C, Payson, M.</p>"
      
    },
    {
        image: doc2,
        name: 'Jeffrey Keenan, M.D., HCLD',
        role: 'Reproductive Endocrinologis',
        info:  `<h4>BIO:</h4>
        <p>Dr. Jeffrey Keenan has many decades of experience treating infertility and is a ForestBloom Fertility physician and the President and Medical Director of the National Embryo Donation Center (NEDC) in Knoxville, Tennessee. This non-profit is the nation’s leading organization focusing on embryo donation and embryo adoption.</p>
        <p>Keenan attended Bucknell University in Lewisburg, Pennsylvania, graduating in 1979. Keenan then decided to pursue a career in medicine at Jefferson Medical College in Philadelphia, Pennsylvania. Upon receiving his medical degree with honors in 1983, Keenan interned at Mercy Hospital in Pittsburgh, Pennsylvania. After his internship, he completed his residency in Obstetrics and Gynecology at Vanderbilt University Medical Center in Nashville, Tennessee. His interest in reproductive medicine caused him to further specialize in this field. As a result, Keenan took up a fellowship in 1988 at Wayne State University where he focused on Reproductive Endocrinology and Infertility</p>
        <p>Upon completion of his fellowship in 1990, Keenan became an active member of several professional medical societies, including the American College of Obstetricians and Gynecologists (ACOG) and the American Society for Reproductive Medicine (ASRM). In addition, he is a current member of the Society for Reproductive Endocrinology and Infertility (SREI) and the Christian Medical and Dental Associations (CMDA). He also served as President of the East Tennessee OB/GYN Society from 1996-1997.</p>
        <p>Keenan is board certified in both Obstetrics and Gynecology and Reproductive Endocrinology and Infertility. Along with holding several certifications in his specialty fields, Keenan is an accomplished author, having written several book chapters and numerous articles published.</p>
         
        <h4>EDUCATION:</h4>
        <p><strong>Undergraduate: </strong>Bucknell University, Lewisburg, Pennsylvania, B.S. Biology, 1975-1979.</p>
        <p><strong>Medical School: </strong>Jefferson Medical College, Philadelphia, Pennsylvania, M.D., 1979-1983.</p>
        <p><strong>Internship: </strong>Rotating Internship, Mercy Hospital, Pittsburgh, Pennsylvania, 1983-1984.</p>
        <p><strong>Residency: </strong>Obstetrics and Gynecology, Vanderbilt University Medical Center, Nashville, Tennessee, 1984-1988.</p>
        <p><strong>Fellowship: </strong>Reproductive Endocrinology and Infertility.Department of Obstetrics and Gynecology, Hutzel Hospital/Wayne State University, Detroit, Michigan, 1988-1990.</p>
        
        <h4>HONORS:</h4>
        <p>Phi Beta Kappa, Alpha Omega Alpha, Phi Eta Sigma, Phi Sigma, Hobart Amory Hare Society</p>
        <p>Prize Poster Award, 46th Annual Meeting of American Fertility Society, Washington, D.C., October 17, 1990. Subject: Luteal Phase Support with Human Chorionic Gonadotropin Does Not Improve Fecundity Rate in Human Menopausal Gonadotropin Stimulated Cycles.</p>
        <p>Dr. Jeffrey and Mrs. Sandy Keenan received the Christian Medical &amp; Dental Associations President's Heritage Award, May 2, 2015.</p>
        
        <h4>BOARD CERTIFICATION:</h4>
        <p>Recertified, American Board of Obstetrics and Gynecology, December 2001.</p>
        <p>Certified, Reproductive Endocrinology and Infertility.</p>
        <p>Clinical Laboratory Director (HCLD), December 1996.</p>
        <p>Certified, American Board of Bioanalysis.</p>
        <p>Division of American Board of Obstetrics and Gynecology, December 1992.High-complexity</p>
        <p>Certified, American Board of Obstetrics and Gynecology, December 1991.</p>
        <p><strong>MEDICAL LICENSURE</strong></p>
        <p>Michigan License No. 053352, July 1988.</p>
        <p>Tennessee License No. 18511, June 1988.</p>
        <p>Certification, NBME 274070, July 1984.</p>
        
        <h4>SOCIETY MEMBERSHIPS:</h4>
        <p>American Society for Reproductive Medicine (1990 - present).</p>
        <p>East Tennessee OB/GYN Society (President 1996 &amp; 1997).</p>
        <p>Society Development Committee for the American Fertility Society (1990-1994).</p>
        <p>Society of Reproductive Surgeons, April 1994 - present</p>
        <p>Society of Reproductive Endocrinology and Infertility.</p>
        
       
        <h4>UIVERSITY APPTS:</h4>
        <p>Professor, Division of Reproductive Endocrinology &amp; Infertility, Department of Obstetrics &amp; Gynecology, University of Tennessee Medical Center, Knoxville, Tennessee, 2010–present.</p>
        <p>Associate Professor, Division of Reproductive Endocrinology &amp; Infertility, Department of Obstetrics &amp; Gynecology, University of Tennessee Medical Center, Knoxville, Tennessee, 1995-2010.</p>
        <p>Assistant Professor, Division of Reproductive Endocrinology &amp; Infertility, Department of Obstetrics &amp; Gynecology, University of Tennessee Medical Center, Knoxville, Tennessee, 1990-1995.</p>
        <p>Clinical Instructor, Wayne State University School of Medicine, Detroit, Michigan, 1988-1990.</p>
        
        <h4>HOSPITAL APPTS:</h4>
        <p>University of Tennessee Medical Center at Knoxville, Active Staff, 1990 – Present.</p>
        <p>St. Mary's Medical Center, Knoxville, Tennessee, Courtesy Staff, 1990 - Present.</p>
        <p>Ft. Sanders Regional Medical Center, Knoxville, Tennessee, Courtesy Staff, 1990-Present.</p>
        <p>Ft. Sanders Parkwest Medical Center, Knoxville, Tennessee, Courtesy Staff, 1994.</p>
        <p>Baptist Hospital for Women, Knoxville, Tennessee Active Staff, 2003 - 2008.</p>
        <p>Tennova Turkey Creek Medical Center, Knoxville, TN, 2008 - present</p>
        <p>Director, Division of Reproductive Endocrinology &amp; Infertility, Department of Obstetrics &amp; Gynecology, University of Tennessee Medical Center, College of Medicine - Knoxville Unit, Knoxville, Tennessee, July 1992-Present.</p>
        
        <h4>CHAPTERS &amp; BOOKS:</h4>
        <p>Keenan J, Finger R. “The Impact of Single Embryo Transfer on Embryo Donation” in Single Embryo Transfer. Gerris J, Adamson D, Racowsky C, De Sutter R, eds., Cambridge University Press, 2008.</p>
        <p>Keenan JA. ‘The Development of the National Embryo Donation Center,’ in S.V. Brakman and D.F. Weaver (Eds.), The Ethics of Embryo Adoption and the Catholic Tradition. Dordrecht: Springer Netherlands Publishers. 2007 Vol 95, 221-30.</p>
        <p>Bukovsky A, Caudle MR, Keenan JA: Regulation of Ovarian Function by Immune System Components: The Tissue Control System (TCS). "Malphigi Volumes On Functional Microanatomy: Microscopy of Reproduction and Development," Pietro M. Motta, M.D. ed., 1997.</p>
        <p>Massey PJ, Caudle MR, Keenan JA, and Chen TT: The Roles of the Cytoskeleton in Steroidogenesis: The Actions of Taxol and Other Cytoskeletal Agents. "Taxane Anticancer Agents: Basic Science and Current Status," George G, et al, eds., ACS Books, 1995.</p>
        <p>Church MW, Kaufmann RA, Keenan JA, et al: Effects of Prenatal Cocaine Exposure. In: Biochemistry and Physiology of Substance Abuse, Vol. III. Tuscon: CRC Press, 1991.</p>
        
        <h4>RECENT PUBLICATIONS:</h4>
        <p>Marshall E, Heidel E, Keenan JA. All embryo transfers after age 37 should be deferred to frozen replacement cycles: An analysis of 43,576 cycles from the CDC ART registry. Submitted for publication 2016</p>
        <p>Finger R, Qi Y, Fabian M, Keenan JA, Stoddart R. Experiences of Families Inquiring About Donating or Adopting Embryos: Results of an On-Line Survey. Adoption Quarterly 2012; 15:57-66.</p>
        <p>Keenan JA, Gissler M, Finger R. Assisted Reproduction Using Donated Embryos: Outcomes from Surveillance Systems in Six Countries. Hum Reprod 2012; 27:747-52.</p>
        <p>Keenan J, Finger R, Check JH, Daly D, Dodds W, Stoddart R. Favorable pregnancy, delivery, and implantation rates experienced in embryo donation programs in the United States. Fertility and Steril. 2008 Oct;90(4):1077-80.</p>
        <p>Keenan JA, Chang J, Finger RF, Jeng G, Cornman KI, Macaluso M. National surveillance data confirm favorable outcome rates from embryo donation (abstract). Fertility and Sterility, 2008; 90:S209.</p>
        
        <h4>RECENT ABSTRACTS:</h4>
        <p>Finger R, Keenan JA, Qi Y, Sommerfelt C, Elkins, C. Obesity and the Ability to Achieve Pregnancy in Embryo Donation. National Embryo Donation Center, Knoxville, Tennessee, USA. Poster submission, American Society for Reproductive Medicine 67th Annual Meeting, Orlando, Florida, October 15-19, 2011.</p>
        <p>Keenan JA, Finger RF. Favorable Pregnancy, Delivery, and Implantation Rates Experienced in 7 Embryo Donation Programs in the United States. Poster #483, ASRM 2007, Oct 13-17, Washington D.C.</p>
        <p>Bukovsky A, Caudle, Keenan JA, Upadhyaya, Van Meter SE, Wimalasena J, and Elder RF. Suicide of T Lymphocytes and Dendritic Cells Accompanies Differentiation of Epithelial Cells. American Society for Reproductive Immunology, 20th Annual Meeting on June 10-13, 2000 in Jacksonville, Florida.</p>
        <p>Bukovsky A, Caudle MR, Keenan JA, Wimalasena, McKenzie P: Association of Macrophage Phenotypes with Regeneration, Terminal Differentiation, and Degeneration of Chorionic Villi in Normal Mature Human Placentae. American Society for Reproductive Immunology, Chicago, May 9-12, 1998, (Submitted).</p>
        <p>Keenan JA, Williams-Boyce PK, Massey PJ, Chen TT, Caudle MR, Bukovsky A. Regression of Endometrial Explants in a Rat Model of Endometriosis Treated with the Immune Modulators Loxoribine and Levamisole. Fertil Steril. 1999 Jul;72(1):135-41</p>`,
    }
      
  ];

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <AboutHeader imageSrc={homepage} title="About Us" />
      <div className="css-8jxyq1">
        <h3 class="css-1wwjhkz">Our Vision</h3>
        <p class="css-jinz5l">
          To provide comprehensive care and unwavering compassion to patients{" "}
          <br />
          struggling with reproductive health issues.
        </p>
      </div>
      <section className="css-42qnr9">
        <div className="css-1u8qly9">
          <h2 className="css-9fv64h">Our Values</h2>
        </div>
        <div className="css-13qd3n5">
          <div className="css-1nqki3m">
            <img src={holi} alt="" />
            <h3>Holistic Treatment &amp; Care</h3>
            <p>
              We believe in a personalized, patient centered approach, asking
              for input from our patients so that treatment decisions can be
              guided by their physical, emotional, spiritual, and certainly
              financial concerns.
            </p>
          </div>
          <div className="css-1nqki3m">
            <img src={inte} alt="" />
            <h3>Integrity</h3>
            <p>
              We provide a multidisciplinary approach to treatment and adhere to
              the highest standards of professionalism, ethics and personal
              responsibility, worthy of the trust our patients place in us.
            </p>
          </div>
          <div className="css-1nqki3m">
            <img src={afirm} alt="" />
            <h3>Life-affirming</h3>
            <p>
              We believe in the sanctity of life and that each life created,
              whether naturally or through the use of reproductive technology,
              is unique and special.
            </p>
          </div>
          <div className="css-1nqki3m">
            <img src={res} alt="" />
            <h3>Respect</h3>
            <p>We treat all patients with respect and dignity.</p>
          </div>
        </div>
      </section>
      <div class="css-972f7l">
        <p>
          Welcome to ForestBloom Fertility. My name is Dr. John David Gordon, and I
          am so happy to tell you about what sets our practice apart. I am very
          excited about what God has in store for us here in Knoxville.
        </p>
        <p>
          After practicing fertility medicine in the Metropolitan DC area for 20
          years, my wife and I were encouraged by Dr. Jeffrey Keenan to take a
          leap of faith in 2019 and relocate here to beautiful East Tennessee. I
          left behind a large fertility practice performing over 1500 IVF cycles
          a year to take over the reins at Southeastern Center for Fertility.
        </p>
        <p>
          My vision was to provide an unparalleled patient experience while
          making sure patients knew they could discuss their concerns about the
          practice of reproductive medicine. To that end, we have succeeded
          beyond all expectations (and in spite of a world-wide pandemic)!
        </p>
        <p>
          Since August 2019, we have experienced unprecedented growth. This
          growth has resulted in the hiring of a multitude of new team members,
          increasing both the nursing and the IVF laboratory staff. More and
          more now, local patients realize they don’t have to travel beyond
          Knoxville to receive excellent fertility care.
        </p>
        <p>
          In addition, patients are now coming here to Knoxville from a
          multitude of states because they are seeking something rarely found in
          reproductive medicine: a clinic that provides excellent technical
          fertility care while also discussing the moral, ethical, spiritual and
          religious concerns raised by IVF. We take care of patients of all
          faiths and those with no particular faith or belief in God, but our
          practice of reproductive medicine is guided by our faith and our
          understanding of how we are to live out that faith on a day-to-day
          basis.
        </p>
        <p>
          So what does that mean when it comes to taking care of patients? Here
          are 4 major differences:
        </p>
        <p>
          1) We are a “no-discard” IVF program. Any embryos created by a couple
          are either available for fresh embryo transfer or later frozen embryo
          transfer, but no viable embryos will be discarded. As a result, we
          practice in a very different way than the majority of IVF clinics in
          the United States. The only embryo that can never result in a healthy
          baby is the one you fail to transfer.
        </p>
        <p>
          2) We offer couples the option to strictly limit the number of eggs
          fertilized in IVF. Since we are a “no-discard” IVF program, it is
          important to discuss, prior to any IVF cycle, the plan regarding how
          many eggs to fertilize. If a couple really wants to avoid freezing ANY
          embryos, then we need to limit the number of eggs fertilized to just 1
          or 2. Unfertilized eggs can be frozen if desired, but we can certainly
          decide to transfer all embryos created in an IVF cycle (as long as we
          fertilize only 1 to 2 eggs).
        </p>
        <p>
          3) We are trying to put the brakes on the creation of an excessive
          number of embryos. We perform over 85% of our IVF in natural
          (unstimulated) cycles or as Mini Stim IVF using oral medications
          (Clomid or Letrozole) and low doses of fertility shots, with the goal
          of retrieving 3-8 mature eggs.
        </p>
        <p>
          4) We are doing what we can to encourage couples to pursue embryo
          adoption. We have received national and international attention for
          our work with the National Embryo Donation Center (NEDC).
          <a href="https://www.goodmorningamerica.com/wellness/story/baby-born-27-year-frozen-embryo-breaks-record-74469304">
            {" "}
            The births of Molly &amp; Emma Gibson (sisters frozen as embryos for
            over 20 years){" "}
          </a>
          and
          <a href="https://edition.cnn.com/2022/11/21/health/30-year-old-embryos-twins/index.html">
            Timothy &amp; Lydia Ridgeway (twins frozen as embryos for 30 years){" "}
          </a>
          captured the hearts and minds of people across the globe. For many
          couples thinking their embryos would never be adopted if they had been
          frozen for more than a few years, and for those couples who had never
          heard of embryo adoption, these news stories were eye-opening.
        </p>
        <p>
          In 2024 we will be moving into a brand new, state-of-the-art facility
          built just behind our current office. With the upcoming move to the
          new office I thought that the time was right for a rebranding; hence,
          the decision to change the name of the practice from Southeastern
          Fertility to ForestBloom Fertility.
        </p>
        <p>
          I am looking forward to serving the needs of our patients in this
          beautiful new office while holding fast to the vision that brought us
          to East Tennessee in 2019: the ability to provide outstanding medical
          care to couples experiencing infertility while remaining true to what
          we are told in the Scriptures.
        </p>
        <p>
          Come experience a different type of fertility practice…We ForestBloom in
          that difference!
          <br />- John David Gordon, MD
          <br />
          January 2024
        </p>
        <p>
          <i>
            "ForestBloom in the Lord always; again, I will say, ForestBloom. Let your
            reasonableness be known to everyone. The Lord is at hand; do not be
            anxious about anything, but in everything, by prayer and
            supplication with thanksgiving, let your requests be made known to
            God. And the peace of God, which surpasses all understanding, will
            guard your hearts and your minds in Christ Jesus." Philippians 4:4-7
          </i>
        </p>
      </div>
      <Doctors />
      <div class="css-2j76r5">
        <h3 class="css-1ot986s">Our Staff</h3>
        <p class="css-gwdap6">
          Our staff is constantly challenged to provide compassionate and
          sensitive care, realizing that women have many different needs and
          abilities in complying with their treatment plans. We ask you to write
          out your concerns at each visit, and will provide a written summary of
          instructions for you when you leave if appropriate.
        </p>
        <p>
          While we are a tertiary referral center for the region's general
          gynecologists, we do not require a referral to make an appointment. We
          do ask that you bring as much of your medical record to your initial
          visit as possible, though. We look forward to serving you and helping
          you achieve your goals!
        </p>
      </div>
      <StaffAccord staffs={staffs}/>
      <Cta />
      <Footer />
    </>
  );
};

export default AboutUs;
