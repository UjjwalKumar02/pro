import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Layout() {
  return (
    <div className="w-[94%] md:max-w-3xl mx-auto">
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
