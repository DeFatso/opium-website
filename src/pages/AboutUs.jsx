import AboutHero from "../components/AboutHero";
import AboutInfo from "../components/AboutInfo";
import AboutPrinciples from "../components/AboutPrinciples";
import AboutPartners from "../components/AboutPartners";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutInfo />
      <AboutPrinciples />
      <AboutPartners />
      <Contact />
      <Footer />
    </main>
  );
}

export default AboutUs;