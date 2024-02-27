
import { Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./Pages/LandingPage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Service from "./Pages/Service";
import Consultations from "./Pages/Consultations";
// import Pricing from "./Pages/Pricing";
import OutofTown from "./Pages/OutofTown";
import DiagTest from "./Pages/DiagTest";
import FerterlityTreatment from "./Pages/FerterlityTreatment";
import Ivf from "./Pages/Ivf";
import EmbryoAdoption from "./Pages/EmbryoAdoption";
import Blog from "./Pages/Blog";
import TJmegan from "./Pages/Blogs/TJmegan";
import KeithStory from "./Pages/Blogs/KeithStory";
import EverybodyStory from "./Pages/Blogs/EverybodyStory";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/services" element={<Service />}/>
        <Route path="/free-consultations" element={<Consultations />}/>
        <Route path="/testimony" element={<Blog />}/>
        {/* <Route path="/pricing" element={<Pricing />}/> */}
        <Route path="/out-of-town-patients" element={<OutofTown />}/>
        <Route path="/services/diagnosis-and-testing" element={<DiagTest />}/>
        <Route path="/services/fertility-treatment-and-non-ivf" element={<FerterlityTreatment />}/>
        <Route path="/services/ivf" element={<Ivf />}/>
        <Route path="/services/embryo-adoption" element={<EmbryoAdoption />}/>
        <Route path="/testimony/t-j-megan-baby-carter-a-southeastern-story" element={<TJmegan />}/>
        <Route path="/testimony/keith-amanda-river-and-emmaline-a-southeastern-story" element={<KeithStory />}/>
        <Route path="/testimony/everybody-has-a-story/" element={<EverybodyStory />}/>
       
      </Routes>
    </div>
  );
}

export default App;
