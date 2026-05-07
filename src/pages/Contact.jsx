import React from "react";
import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <Footer />
    </>
  );
};

export default Contact;