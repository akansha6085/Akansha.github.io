import Head from "next/head";
import About from "../components/About";
import Contactme from "../components/Contactme";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/skills";
import WorkExperience from "../components/WorkExperience";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600 scrollbar-thin ">
      <Head>
        <title>My Portfolio</title>
      </Head>
          <Header/> 

    <section id="hero" className="snap-start">
       <Hero/>
    </section>

    <section id="about" className="snap-center">
    <About/>
    </section>

    {/*Experience*/}
    <section id="experience" className="snap-center">
      <WorkExperience/>
    </section>

    {/*Skills*/}
    <section id="skills" className="snap-start">
      <Skills/>
    </section>
    

    {/*Projects*/}
    <section id="projects" className="snap-center">
    <Projects/>
    </section>

    {/*Contact Me*/}
    <section id="contactme" className="snap-start">
    <Contactme/>
    </section>

    </div>
  );
}
