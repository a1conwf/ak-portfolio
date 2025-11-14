import { useEffect } from "react";

//aos
import AOS from "aos";
import "aos/dist/aos.css";

//components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

//styles
import "./scss/index.scss";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Toaster />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
