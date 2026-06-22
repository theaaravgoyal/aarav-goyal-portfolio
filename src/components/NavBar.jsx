import { useState } from "react";
import NavButtons from "./NavBar/NavButtons";
import NavLogo from "./NavBar/NavLogo";
import NavigationTabs from "./NavBar/NavigationTabs";

function NavBar({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavBarTabs = ["Home", "Services", "About", "Reviews", "Contact"];
  const MobileNavBarTabs = NavBarTabs.filter((tab) => tab !== "Contact");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-(--primary) text-(--secondary) px-10 sm:px-20 py-5 sm:py-7.75 lg:px-20 lg:py-8">
      <div className="flex justify-between items-center">
        <NavLogo />

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <NavigationTabs Tabs={NavBarTabs} activeSection={activeSection} />
        </div>

        <div className="hidden lg:block">
          <NavButtons />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden border border-white/20 w-8 h-8 p-2 rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i
            className={isMenuOpen ? "fa-solid fa-xmark text-sm sm:text-md" : "fa-solid fa-bars text-sm sm:text-md"}
          ></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-75 opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-5 text-center bg-white/5 border border-white/10 rounded-2xl py-6">
          {MobileNavBarTabs.map((TabName) => (
            <li key={TabName} className="text-sm sm:text-base">
              <a
                href={`#${TabName}`}
                onClick={() => setIsMenuOpen(false)}
                className={`nav-link text-(--secondary) ${
                  activeSection === TabName ? "active-nav-link" : ""
                }`}
              >
                {TabName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
