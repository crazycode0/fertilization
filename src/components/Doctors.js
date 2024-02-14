import React from "react";
import "../assets/css/Doctors.css";
import gordon from "../assets/img/gordon.jpg";
import keenan from "../assets/img/keenan.jpg";

const Doctors = () => {
  return (
    <>
      <section className="css-19bkzgd">
        <div className="css-ru9m2u">
          <div className="css-85v1cg">
            <h3 className="css-1wwjhkz">Our Doctors</h3>
            <p className="css-16y6ixw">
              Dr. John David Gordon and Dr. Jeffrey Keenan bring nearly 50 years
              of combined experience caring for patients struggling with
              reproductive health issues.
            </p>
          </div>
          <div className="css-1nkfhts">
            <a href="/about-us">
              <img src={gordon} alt="" />
              <div className="member-info-container">
                <h4>
                  Dr. John Gordon
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
                </h4>
                <p>MD</p>
              </div>
            </a>
            <a href="/about-us">
              <img src={keenan} alt="" />
              <div className="member-info-container">
                <h4>
                  Dr. Jeffrey Keenan
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
                </h4>
                <p>MD, HCLD</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
