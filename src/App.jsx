import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import AboutSection from "./components/AboutSection";
import ReviewSection from "./components/ReviewSection";
import ContactSection from "./components/ContactSection";
import MobileContactBtn from "./components/MobileContactBtn";
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
    <div className="w-full min-h-screen bg-(--primary) overflow-x-hidden">
      <NavBar activeSection={activeSection} />

      <HeroSection />

      <ServiceSection />

      <AboutSection />

      <ReviewSection />

      <div className="lg:flex hidden">
        <ContactSection />
      </div>
      <MobileContactBtn />
    </div>
  );
}

export default App;
