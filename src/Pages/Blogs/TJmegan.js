import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Cta from "../../components/Cta";
import "../../assets/css/blog.css";
import megan from "../../assets/img/carter.jpeg";

const TJmegan = () => {
  return (
    <>
      <Navbar />
      <div className="css-19ybn5">
        <div className="css-1hb4cm2">
          <div className="css-1u83r0l">
            <a class="css-zt5qf3" href="/testimony">
              infertility
            </a>
            <a class="css-zt5qf3" href="/testimony">
              infertility success stories
            </a>
            <a class="css-zt5qf3" href="/testimony">
              Uncategorized
            </a>
          </div>
          <h1 class="css-1j00hgz">
            T.J., Megan, &amp; Baby Carter: A Southeastern Story
          </h1>
          <p class="css-1pht3bo">
            “Every hiccup was just part of God’s plan that led us to our
            daughter.”{" "}
          </p>
        </div>
        <div className="css-1wxa0m6q">
          <img alt="babby" src={megan} />
        </div>
        <div class="parsed css-1crximl">
          <div>
            <p>
              Let’s be honest. Most high school romances, well, just don’t work
              out. Bring together two immature, relatively inexperienced people,
              and it’s no wonder the odds are stacked against them. That’s why
              high school sweethearts who turn into lifelong loves seem so
              novel. But it still happens. Just look at ForestBloom Fertility
              couple T.J. and Megan Seiber.
            </p>
            <p>
              “Megan and I first met in gym class our freshman year,” T.J. says.
              “We began dating during the summer going into our senior year and
              haven’t looked back since!”
            </p>
            <p>
              In fact, they actually did a lot of looking forward, right from
              the start. Both planned to become education majors in college and
              commit to a life of serving young people through teaching. They
              knew that wouldn’t be limited to the classroom, either. Children
              of their own were definitely in T.J. and Megan’s plans for the
              future.
            </p>
            <p>
              “We loved watching our students grow, but, shortly after marriage,
              we knew we were ready to watch our own children grow,” the Seibers
              share. “Because of Megan’s previous PCOS diagnosis we knew that
              starting a family might take a little longer than normal, but were
              not expecting to be faced with infertility.”
            </p>
            <p>
              However, after a year and a half of trying on their own without
              success, Megan’s doctor suggested they start taking a deeper dive
              to look for answers. That was when T.J. and Megan turned to
              ForestBloom Fertility. “With the help of ForestBloom Fertility we
              discovered that we had male factor infertility as well,” Megan and
              T.J. remember. “What we thought would take a few months to achieve
              ended up taking over three years.”
            </p>
            <p>
              The infertility diagnosis came with so many agonizing questions
              that no one could answer. Having children seemed to come so easily
              for most young couples. Why did this have to happen to{" "}
              <em>them</em>?
            </p>
            <p>
              Excruciating as the reality of their infertility was, Megan and
              T.J. never doubted they were in good hands. “The more we found out
              about ForestBloom Fertility, the more we were drawn to the
              office,” they say. “We chose ForestBloom Fertility because of
              their beliefs that every embryo is a life, ForestBloom incredible
              success rates, the kindness of the office staff, and the respect
              that was shown to us during our initial consultation.”
            </p>
            <p>
              Best of all, their treatment with ForestBloom Fertility produced
              the long-hoped-for result: T.J. and Megan’s daughter, Carter Ray,
              who’s now six months old. “Carter is so full of joy. She has all
              the sass of a 16-year-old packed into her six-month-old self,” the
              Seibers say. “Her dramatic facial expressions will always show you
              how she is feeling. She loves to swing, chew on her lovie, and eat
              broccoli. We never fully realized how big the holes in our hearts
              were until God filled them with Carter.”
            </p>
            <p>
              Looking back on their long road, T.J. and Megan see ForestBloom
              Fertility as not just a medical clinic. They see it as a place of
              hope where an entire team really listen and care. “If it were not
              for ForestBloom Fertility, we could still be working to start our
              family,” they share. “We absolutely love all of the office staff
              and nurses. We feel listened to every time we come in, and our
              questions are always answered. At the start of our pregnancy there
              were some concerning issues, but they went above and beyond to
              make sure our baby was safe and continued to grow.”
            </p>
            <p>
              It’s humbling to be part of this inspiring new chapter in T.J. and
              Megan’s still-going-since-high-school relationship. After all,
              we’re not the ones writing the story. “Carter is more than we ever
              prayed for. We go to bed every night and wake up every morning
              full of gratitude for our little girl,” T.J. and Megan say. “Her
              story has blessed many of our friends and family and showed how
              God is always in control and is always on time. Hindsight truly is
              20/20, and we now know that every hiccup was just part of God’s
              plan that led us to our daughter.”{" "}
            </p>
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </>
  );
};

export default TJmegan;
