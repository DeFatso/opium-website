import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import ContactExtras from "./components/ContactExtras";
import Footer from "./components/Footer";
import { Frown } from "lucide-react";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <ContactExtras />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;