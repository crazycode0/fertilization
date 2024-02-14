import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header';
import HomeSec1 from '../components/HomeSec1';
import Doctors from '../components/Doctors';
import Cta from '../components/Cta';
import Footer from '../components/Footer/Footer';

const LandingPage = () =>{
  return (
    <>
    <Navbar />
    <Header />
    <HomeSec1 />
    <Doctors />
    <Cta />
    <Footer />
    </>
  )
}

export default LandingPage;