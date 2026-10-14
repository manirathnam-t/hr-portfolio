import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Initiatives from "./components/Initiatives";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-page min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Expertise />
          <Experience />
          {/* <Initiatives /> */}
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
