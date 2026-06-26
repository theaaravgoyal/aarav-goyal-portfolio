import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FooterSection from "./components/FooterSection/FooterSection";
function App() {
  const [activeSection, setActiveSection] = useState("Services");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <NavBar activeSection={activeSection} />

      <HeroSection />

      <ServiceSection />

      <AboutSection />

      <ReviewSection />

      <ContactSection />

      <FooterSection />
    </>
  );
}

export default App;
