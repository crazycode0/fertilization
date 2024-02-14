
import { Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./Pages/LandingPage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Service from "./Pages/Service";
import Consultations from "./Pages/Consultations";
// import Pricing from "./Pages/Pricing";
import OutofTown from "./Pages/OutofTown";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/services" element={<Service />}/>
        <Route path="/free-consultations" element={<Consultations />}/>
        {/* <Route path="/pricing" element={<Pricing />}/> */}
        <Route path="/out-of-town-patients" element={<OutofTown />}/>
        
      </Routes>
    </div>
  );
}

export default App;
