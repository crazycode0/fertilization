import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Cta from "../../components/Cta";
import "../../assets/css/blog.css";
import story from "../../assets/img/story.png";

const EverybodyStory = () => {
  return (
    <>
      <Navbar />
      <div className="css-19ybn5">
        <div className="css-1hb4cm2">
          <div className="css-1u83r0l">
            <a class="css-zt5qf3" href="/testimony">
              embryos adoption
            </a>
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
            <a class="css-zt5qf3" href="/testimony">
              Mini-Stim IVF
            </a>
            <a class="css-zt5qf3" href="/testimony">
              Natural Cycle IVF
            </a>
          </div>
          <h1 class="css-1j00hgz">Everybody Has a Story</h1>
          <p class="css-1pht3bo">
            Everybody’s story matters! That’s why it’s so important to talk to
            your children, whether they were conceived using fertility treatment
            or not, about how they entered this world.
          </p>
        </div>
        <div className="css-1wxa0m6q">
          <img alt="babby" src={story} />
        </div>
        <div class="parsed css-1crximl">
          <div>
            <p>
              Everybody’s story matters! That’s why it’s so important to talk to
              your children, whether they were conceived using fertility
              treatment or not, about how they entered this world. Plus, lots of
              guest stars -including Baby Yoda- in this edition of our Internet
              show “Talk Fertility” below.
            </p>

            <div
              className="resss"
              data-url=""
              data-html='<iframe 
              allow="autoplay; 
              fullscreen; picture-in-picture" 
              allowfullscreen="" 
              frameborder="0" 
              height="990" 
              src="https://player.vimeo.com/video/501289835?dnt=1&amp;amp;app_id=122963" 
              title="Everybody Has a Story" 
              width="557">
              </iframe>'
            >
              <iframe
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen=""
                frameborder="0"
                height="990"
                src="https://player.vimeo.com/video/501289835?dnt=1&amp;app_id=122963"
                title="Everybody Has a Story"
                width="557"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </>
  );
};

export default EverybodyStory;
