import React, { useState } from "react";
import "../assets/css/StaffAccord.css";

const StaffAccord = ({ staffs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="staff-accord">
      {staffs.map((doctor, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-button ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
            role="button"
            tabIndex="0"
          >
            <div className="doctor-info">
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
              </div>
              <div className="doctor-details">
                <h4>{doctor.name}</h4>
                <p>{doctor.role}</p>
              </div>
            </div>
            <div className="accordion-icon">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
            </div>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              {/* Content to display when the accordion item is active */}
                
                <div className="content-texxt" dangerouslySetInnerHTML={{ __html: doctor.info}}/>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StaffAccord;
