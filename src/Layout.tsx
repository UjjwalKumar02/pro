import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Layout() {
  return (
    <div className="w-[97%] md:max-w-175 mx-auto shadow-xs">
      <Hero />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Footer />
      {/* <Nav /> */}
    </div>
  );
}
