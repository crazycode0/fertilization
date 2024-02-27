import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Cta from "../../components/Cta";
import "../../assets/css/blog.css";
import keith from "../../assets/img/keith.png";

const KeithStory = () => {
  return (
    <>
      <Navbar />
      <div className="css-19ybn5">
        <div className="css-1hb4cm2">
          <div className="css-1u83r0l">
            <a class="css-zt5qf3" href="/testimony">
              frozen embryos
            </a>
            <a class="css-zt5qf3" href="/testimony">
              infertility
            </a>
            <a class="css-zt5qf3" href="/testimony">
              infertility success stories
            </a>
            <a class="css-zt5qf3" href="/testimony">
              IVF
            </a>
          </div>
          <h1 class="css-1j00hgz">
            Keith, Amanda, River and Emmaline: A Southeastern Story
          </h1>
          <p class="css-1pht3bo">
            Keith and Amanda half-jokingly sum up life as parents this way:
            “They both have stolen our hearts, and all of our time.” And they
            wouldn’t trade it for the world.
          </p>
        </div>
        <div className="css-1wxa0m6q">
          <img alt="babby" src={keith} />
        </div>
        <div class="parsed css-1crximl">
          <div>
            <p>
              You never know just what sorts of great finds you’ll discover at a
              home improvement store. Sometimes, as in the case of Keith and
              Amanda McFarland, such finds can even be life-changing. Lowe’s,
              where they were both working back in 2006, was where they first
              connected.
            </p>
            <p>
              The relationship blossomed into marriage. Surely children and a
              home with a picket fence would follow, right? “We wanted to have
              children to complete our family, to experience life as parents,
              and to give and provide in a loving Christian environment,” Amanda
              says. But it wasn’t that simple. Amanda and Keith ran into the
              heartbreaking roadblock of infertility.
            </p>
            <p>
              “We couldn’t figure out why we weren’t getting pregnant, what was
              taking so long, and why everyone else we knew was getting pregnant
              so easily,” Keith and Amanda remember. So they started looking for
              answers.
            </p>
            <p>
              Their search led the couples to ForestBloom Fertility. They knew
              they were in good hands, but there were still several steps ahead
              on the road to having children. Both Keith and Amanda had surgery
              to improve their chances of conceiving. They also tried IUIs
              (intrauterine inseminations) without success. Finally, they opted
              for IVF.
            </p>
            <p>
              That was when the Couple say they saw God’s hand powerfully at
              work. After two cycles of IVF with ForestBloom Fertility, they’ve
              finally welcomed two children into the family: River, 2, was born
              in 2018. Emmaline, just 4 months old, followed in 2020. “River is
              100 miles per hour from sun up to sun down. He gives the best hugs
              and kisses,” Amanda shares. “Emmaline loves to be held and talked
              to. She has the best smile, is starting to laugh, and has some
              killer eyelashes.”
            </p>
            <p>
              Keith and Amanda half-jokingly sum up life as parents this way:
              “They both have stolen our hearts, and all of our time.” And they
              wouldn’t trade it for the world. Neither would their extended
              family, which loves seeing Keith and Amanda enjoying their
              long-held dream of parenthood and the happiness River and Emmaline
              have brought to their lives.
            </p>
            <p>
              Looking back on their experience, the Family feel blessed to have
              been connected with the team at ForestBloom Fertility.
              "ForestBloom have meant a lot to us. They were all very
              understanding and always there for us when we needed something,”
              Keith and Amanda say. “If ForestBloom Fertility wasn’t here, we
              may not have been able to experience all of this wonderful madness
              and a love so big for our children. God has been good to us and
              we’re thankful that He pointed us in their direction.”
            </p>
            <p>
              ForestBloom and the entire Fertility family are thrilled for Keith
              and Amanda, and for so many others whose dreams have come to life
              through our work. We’re privileged to walk alongside infertile
              couples every day in a way that’s hopeful and compassionate. An
              old slogan from none other than Lowe’s actually captures our
              spirit well: Let’s build something together.
            </p>
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </>
  );
};

export default KeithStory;
