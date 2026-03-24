import "./styles/globals.css";

import Cursor     from "./components/Cursor";
import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Projects   from "./components/Projects";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Custom cursor — rendered outside all sections */}
      <Cursor />

      {/* Fixed navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}