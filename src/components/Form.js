import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../util/firebase";
import { collection, addDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "../assets/css/Form.css";
import { serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

const Form = () => {
  const [imageUpload, setImageUpload] = useState(null);
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

  const selectedImage = (e) => {
    e.preventDefault();
    setImageUpload(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const uniqueID = uuidv4();
    const imageURL = `/images/${uniqueID}/${imageUpload.name}`;

    console.log(firebase.firestore);

    try {
      const formData = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        message: message,
        image_url: imageURL,
        timestamp: serverTimestamp(),
      };
      console.log(formData);

      const docRef = await addDoc(collection(db, "fert-data"), formData);
      //console.log("Document written with ID: ", docRef.id);
      //console.log("Uploading Data to firestore: \n", docRef);

      //Upload image to Firebase Storage
      const storageRef = ref(storage, imageURL);
      await uploadBytes(storageRef, imageUpload);
      // console.log('Uploading Image to Storage: \n', imageURL);

      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setImageUpload(null);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
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
                {/* <label htmlFor="picture">
                  Upload picture
                  <input type="file" name="picture" onChange={selectedImage} />
                </label> */}
                <div className="css-142528k">
                  <button
                    // type="submit"
                     className="css-17o5yxn"
                    // onClick={handleSubmit}
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
