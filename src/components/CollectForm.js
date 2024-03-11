import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../util/firebase";
import firebase from "firebase/compat/app";
import "../assets/css/Form.css";
import { serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import ScaleLoader from "react-spinners/ScaleLoader";



const CollectForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [patientInformation, setPatientInformation] = useState(null);
  const [patientAgreement, setPatientAgreement] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const modalRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  // Update the file input's key to reset it
  const handleResetFileInput = () => {
    setPatientInformation(null);
    setPatientAgreement(null);
    setImageUpload(null);
    setFileInputKey(Date.now());
  };

  const handleModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleSubmit);
    };
  },[]);

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

  const selectedImage = (e) => {
    e.preventDefault();
    setImageUpload(e.target.files[0]);
  };

  const onPatientInformationSelect = (e) => {
    e.preventDefault();
    setPatientInformation(e.target.files[0]);
  };
  const onPatientAgreementSelect = (e) => {
    e.preventDefault();
    setPatientAgreement(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //show Loader
    setIsLoading(true);
    const uniqueID = uuidv4();
    const imageURL = `/images/${uniqueID}/${imageUpload.name}`;
    const patientInformationUrl = `/documents/${uniqueID}/${patientInformation.name}`;
    const patientAgreementUrl = `/documents/${uniqueID}/${patientAgreement.name}`;

    console.log(firebase.firestore);

    try {
      const formData = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        image_url: imageURL,
        information_Url: patientInformationUrl,
        agreement_Url: patientAgreementUrl,
        timestamp: serverTimestamp(),
      };
      console.log(formData);

      
      //Upload image to Firebase Storage
      const storageRef = ref(storage, imageURL);
      await uploadBytes(storageRef, imageUpload);

      //Upload document to Firebase Storage
      const informationRef = ref(storage, patientInformationUrl);
      await uploadBytes(informationRef, patientInformation);

      const agreementRef = ref(storage, patientAgreementUrl);
      await uploadBytes(agreementRef, patientAgreement);
    } catch (error) {
      console.error("Error uploading data:", error);
    } finally {
      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      handleResetFileInput();
      setIsLoading(false);
      handleModal();
    }
  };

  return (
    <>
      <section id="form-section" className={showModal ? "blur" : "css-1r5o31s"}>
        <div className="css-16lrxtm" ref={modalRef}>
          <form onSubmit={handleSubmit}>
            <div className="css-1ufkmvh">
              <div className="css-1vgd8uo">
                <label htmlFor="first_name">
                  First Name
                  <input
                    type="text"
                    name="first_name"
                    className="form-control"
                    value={firstName}
                    onChange={onChangeFirstName}
                    placeholder="type your first name..."
                    required
                  />
                </label>
                <label htmlFor="last_name">
                  Last Name
                  <input
                    type="text"
                    name="last_name"
                    value={lastName}
                    onChange={onChangeLastName}
                    placeholder="type your last name..."
                    required
                  />
                </label>
                <label htmlFor="email">
                  Email Address
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    required
                    placeholder="type your email..."
                  />
                </label>
                <label htmlFor="phone">
                  Phone
                  <input
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={onChangeMobile}
                    placeholder="type your mobile number..."
                    required
                  />
                </label>
                <div>
                  <label>
                    <b>please fill the following forms</b>
                  </label>
                  <label>
                    <p>
                      <a href="/Patient-Information-Sheet.pdf" download>
                        Patient Information Form
                      </a>
                    </p>
                  </label>
                  <label>
                    <p>
                      <a href="/Patient-Registration-Agreement.pdf" download>
                        Patient Registration Agreement
                      </a>
                    </p>
                  </label>
                </div>
                <label htmlFor="information">
                  Patient Information
                  <input
                    key={fileInputKey}
                    type="file"
                    accept=".pdf"
                    name="patientInformation"
                    onChange={onPatientInformationSelect}
                    required
                  />
                </label>
                <label htmlFor="agreement">
                  Patient Registration Agreement
                  <input
                    key={fileInputKey}
                    type="file"
                    accept=".pdf"
                    name="patientAgreement"
                    onChange={onPatientAgreementSelect}
                    required
                  />
                </label>
                <label htmlFor="context">
                  Select the Approved Government Issued ID
                  <select name="context">
                    <option value="">Choose one</option>
                    <option value="driverLicense">Driver's License</option>
                    <option value="passport">Passport</option>
                    <option value="military">Military ID Card</option>
                  </select>
                </label>
                <label htmlFor="picture">
                  Upload picture
                  <input
                    key={fileInputKey}
                    type="file"
                    accept="image/*"
                    name="picture"
                    onChange={selectedImage}
                    required
                  />
                </label>

                <div className="css-142528k aling-spinner">
                  <button type="submit" className="css-17o5yxn">
                    {isLoading && (<span className="alinn">
                      <ScaleLoader
                        color="#47E4E0"                       
                        size={150}
                        aria-label="Loading Spinner"
                      />
                      </span>
                    )}
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <p>Thanks for filling the form we would get back to you shortly</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CollectForm;
