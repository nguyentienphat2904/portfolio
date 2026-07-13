import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar/Navbar";
import About from "@/components/layout/sections/about";
import Certifications from "@/components/layout/sections/certifications";
import Contact from "@/components/layout/sections/contact";
import Education from "@/components/layout/sections/education";
import Experience from "@/components/layout/sections/experience";
import Projects from "@/components/layout/sections/projects";
import Skills from "@/components/layout/sections/skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
