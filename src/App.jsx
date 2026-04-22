import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects.jsx";
import Backtotop from "./components/Backtotop.jsx";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <Backtotop />
    </div>
  );
}

export default App;
