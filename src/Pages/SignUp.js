import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cta from '../components/Cta';
import AboutHeader from '../components/AboutHeader';
import CollectForm from '../components/CollectForm';

const SignUp = () => {
  return (
    <>
    <Navbar />
    <AboutHeader title='SIGNUP'/>
    <CollectForm />
    <Cta />
    <Footer />
    </>
  )
}

export default SignUp;