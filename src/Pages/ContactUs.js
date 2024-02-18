import React from "react";

import AboutHeader from "../components/AboutHeader";
import Cta from "../components/Cta";
import Footer from "../components/Footer/Footer";
import Contact_img from "../assets/img/contact-us.jpeg";
import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <AboutHeader imageSrc={Contact_img} title="Contact Us" />
      <section class="css-o0ub3t">
        <div class="css-1wims16">
          <div class="css-99j6m4">
            <h3 class="css-1wwjhkz">Get in touch</h3>
            <p class="css-4feqh5">
              We’d love to hear from you. Our friendly team is always here to
              serve.
            </p>
          </div>
          <div class="css-1ei6j21">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 384 512"
              class="css-tkboi1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
            </svg>
            <div class="css-107pnfv">
              <h3 class="css-1qo1civ">Office</h3>
              <p>Come say hello at our office.</p>
              <p>11126 Kingston Pike Knoxville, TN 37934</p>
            </div>
          </div>
          <div class="css-1ei6j21">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="css-tkboi1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
            </svg>
            <div class="css-107pnfv">
              <h3 class="css-1qo1civ">Phone</h3>
              <p>M - F : 8AM - 4:30PM</p>
              <a class="link" href="tel:865.777.0088">
                865.777.0088
              </a>
            </div>
          </div>
          <div class="css-rgygsp">
            <a
              href="https://twitter.com/ForestBloomIVF"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Twitter"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/ForestBloomFertility/"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Facebook"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ForestBloomivf/"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Instagram"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@ForestBloomfertility"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Youtube"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="css-ibbla4 adj">
          {/* <section id="form-section" class="css-1r5o31s">
            <div class="css-16lrxtm">
              <form action="https://usebasin.com/f/f95fb9d7171b" method="POST">
                <div class="css-1ufkmvh">
                  <div class="css-1vgd8uo">
                    <label for="first_name">
                      First Name
                      <input id="first_name" type="text" name="first_name" />
                    </label>
                    <label for="last_name">
                      Last Name
                      <input id="last_name" type="text" name="last_name" />
                    </label>
                    <label for="email">
                      Email Address
                      <input id="email" type="email" name="email" />
                    </label>
                    <label for="phone">
                      Phone
                      <input id="phone" type="tel" name="phone" />
                    </label>
                    <label for="context">
                      How can we help you?
                      <select name="context" id="context">
                        <option value="">Choose one</option>
                        <option value="appointment">
                          I want to make an appointment
                        </option>
                        <option value="gordon">
                          I have a question for Dr. Gordon
                        </option>
                        <option value="keenan">
                          I have a question for Dr. Keenan
                        </option>
                        <option value="other">I need something else</option>
                      </select>
                    </label>
                    <label for="message">
                      Comments / Questions
                      <textarea id="message" name="message" rows="5"></textarea>
                    </label>
                    <div class="css-142528k">
                      <button type="submit" class="css-17o5yxn">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section> */}
          <Form />
        </div>
      </section>

      
      <Cta />
      <Footer />
    </>
  );
};

export default ContactUs;
