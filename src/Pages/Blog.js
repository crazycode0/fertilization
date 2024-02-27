import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Cta from "../components/Cta";
import AboutHeader from "../components/AboutHeader";
import test from "../assets/img/blog-img.png";
import megan from "../assets/img/carter.jpeg";
import story from "../assets/img/story.png";
import keith from "../assets/img/keith.png";
import "../assets/css/blog.css";
import { isCompositeComponent } from "react-dom/test-utils";
const Blog = () => {
  return (
    <>
      <Navbar />
      <AboutHeader title="Testimony" imageSrc={test} />

      <div className="blog-content">
        <h2 className="css-e7tqb7">Testimony Post</h2>
        <div className="css-cr84lr">
          <div className="css-1o0k7by">
            <a href="/testimony/t-j-megan-baby-carter-a-southeastern-story">
              <div class="css-1wxa0m6">
                <img className="css-10dmsau" src={megan} />
              </div>
              <div class="css-hmgea">
                <h1 class="css-1sftgjg">
                  T.J., Megan, &amp; Baby Carter: A Southeastern Story
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                      ></path>
                    </svg>
                  </span>
                </h1>
                <p class="css-11lm81p">
                  “Every hiccup was just part of God’s plan that led us to our
                  daughter.”
                </p>
              </div>
            </a>
          </div>
          <div className="css-1o0k7by">
            <a href="/testimony/keith-amanda-river-and-emmaline-a-southeastern-story">
              <div class="css-1wxa0m6">
                <div aria-hidden="true" className="lazy css=-njpo51"></div>
                <img className="css-10dmsau" src={keith} />
              </div>
              <div class="css-hmgea">
                <h1 class="css-1sftgjg">
                  Keith, Amanda, River and Emmaline: A Southeastern Story
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                      ></path>
                    </svg>
                  </span>
                </h1>
                <p class="css-11lm81p">
                  Keith and Amanda half-jokingly sum up life as parents this
                  way: “They both have stolen our hearts, and all of our time.”
                  And they wouldn’t trade it for the world.
                </p>
              </div>
            </a>
          </div>
          <div className="css-1o0k7by">
            <a href="testimony/everybody-has-a-story">
              <div class="css-1wxa0m6">
                <div aria-hidden="true" className="lazy css=-njpo51"></div>
                <img className="css-10dmsau" src={story} />
              </div>
              <div class="css-hmgea">
                <h1 class="css-1sftgjg">
                  Everybody Has a Story
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                      ></path>
                    </svg>
                  </span>
                </h1>
                <p class="css-11lm81p">
                  Everybody’s story matters! That’s why it’s so important to
                  talk to your children, whether they were conceived using
                  fertility treatment or not, about how they entered this world.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <Cta />
      <Footer />
    </>
  );
};

export default Blog;
