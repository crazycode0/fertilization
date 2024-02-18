import React, { useState } from "react";
import "../assets/css/FAQaccord.css";

const FAQaccord = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="que-accord">
      <h3 class="css-4kjhbf">Frequently Asked Questions</h3>
     
        {questions.map((doctor, index) => (
        <div key={index} className="accordion-item con">
          <div
            className={`accordion-button ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
            role="button"
            tabIndex="0"
          >
            <div class="css-11f06mp">
              <div class="css-zrc6a9">
                <h4 class="css-ou388v">{doctor.que}</h4>
              </div>
            </div>
            <div className="accordion-icon">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
          </div>
          {activeIndex === index && (
            <div className="css-gzjc9s">
              {/* Content to display when the accordion item is active */}

              <div
                className="content-texxt"
                dangerouslySetInnerHTML={{ __html: doctor.ans }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQaccord;
