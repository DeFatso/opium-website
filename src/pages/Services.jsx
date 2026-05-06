import React from "react";
import Navbar from "../components/Navbar";
import ServicesHero from "../components/ServicesHero";
import ServicesSection from "../components/ServicesSection";
import ServicesProductsSupply from "../components/ServicesProductsSupply";
import ServicesShowcase from "../components/ServicesShowcase";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <ServicesSection />
      <ServicesProductsSupply />
      <ServicesShowcase />
      <Footer />
    </>
  );
};

export default Services;