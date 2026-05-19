import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Target from "./components/Target";

export default function Layout() {
  return (
    <div className="bg-white border-x border-gray-100 rounded-xl md:max-w-175 mx-auto shadow-xs">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Skills />
      {/* <Target /> */}
      <Footer />
    </div>
  );
}
