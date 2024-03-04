import React, { useState } from "react";
import "../assets/css/Form.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };
  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeMobile = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };
  const onChangeMessage = (e) => {
    const message = e.target.value;
    setMessage(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
  };

  return (
    <>
      <section id="form-section" className="css-1r5o31s">
        <div className="css-16lrxtm">
          <form action="" method="POST">
            <div className="css-1ufkmvh">
              <div className="css-1vgd8uo">
                <label htmlFor="first_name">
                  First Name
                  <input
                    type="text"
                    name="first_name"
                    value={firstName}
                    onChange={onChangeFirstName}
                  />
                </label>
                <label htmlFor="last_name">
                  Last Name
                  <input
                    type="text"
                    name="last_name"
                    value={lastName}
                    onChange={onChangeLastName}
                  />
                </label>
                <label htmlFor="email">
                  Email Address
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </label>
                <label htmlFor="phone">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={onChangeMobile}
                  />
                </label>
                <label htmlFor="context">
                  How can we help you?
                  <select name="context">
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
                  <textarea
                    name="message"
                    rows="5"
                    value={message}
                    onChange={onChangeMessage}
                  />
                </label>
               
                <div className="css-142528k">
                  <button
                    // type="submit"
                     className="css-17o5yxn"
                    onClick={handleSubmit}
                  >
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
