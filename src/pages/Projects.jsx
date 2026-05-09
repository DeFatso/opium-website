import React from "react";
import Navbar from "../components/Navbar";
import ProjectsHero from "../components/ProjectsHero";
// import ProjectsStats from "../components/ProjectsStats";
import ProjectsGrid from "../components/ProjectsGrid";
import ProjectsDetails from "../components/ProjectsDetails";
import Footer from "../components/Footer";

const Projects = () => {
    return (
        <>
            <Navbar />
            <ProjectsHero />
            {/* <ProjectsStats /> */}
            <ProjectsGrid />
            <ProjectsDetails />
            <Footer />
        </>
    );
};

export default Projects;