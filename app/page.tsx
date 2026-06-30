import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import GitHubSection from "@/components/GitHubSection";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Education />
      <GitHubSection />
      <ResumeSection />
      <Contact />
    </>
  );
}
