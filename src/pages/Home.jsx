import About from "../components/About";
import Hero from "../components/Hero";
import ProjectsStats from "../components/ProjectsStats"
import HomeServices from "../components/HomeServices";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProjects from "../components/FeaturedProjects";
import IndustriesServed from "../components/IndustriesServed";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Hero />
      <ProjectsStats />
      <About />
      <HomeServices />
      <WhyChooseUs />
      <FeaturedProjects />
      <IndustriesServed />
      <CTABanner />
      <Footer />
    </>
  );
}

export default Home;