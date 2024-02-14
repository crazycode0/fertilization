import React from "react";
import "../assets/css/Form.css";

const Form = () => {


    const handleSubmit = (event) => {
        event.preventDefault(); 
        };
  return (
    <>
      <section id="form-section" className="css-1r5o31s">
        <div className="css-16lrxtm">
          <form action="" method="POST">
            <div className="css-1ufkmvh">
              <div className="css-1vgd8uo">
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
                <div className="css-142528k">
                  <button type="submit" className="css-17o5yxn" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
