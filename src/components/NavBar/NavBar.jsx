import { useState } from "react";
import darkModeLogo from "../../assets/Images/logo/darkModeLogo.png";

function NavBar({ activeSection }) {
  // --- DATA ---
  const navTabs = ["Home", "Services", "About", "Reviews", "Contact"];
  const hireButtonText = "Hire Me";
  // ------------

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-(--primary) text-(--secondary) px-10 sm:px-20 py-5 sm:py-7.75 lg:px-20 lg:py-8">
      <div className="flex justify-between items-center">
        {/* Website Logo */}
        <div className="w-14 sm:w-18.75">
          <img className="object-cover" src={darkModeLogo} alt="Website Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex gap-6">
            {navTabs.map((tabName) => (
              <li key={tabName}>
                <a
                  href={`#${tabName}`}
                  className={`nav-link text-(--secondary) ${
                    activeSection === tabName ? "active-nav-link" : ""
                  }`}
                >
                  {tabName}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-6 items-center">
          {/* Dark mode toggle — reserved for future use
          <button className="border border-white/20 p-2 rounded-full w-[35px] h-[35px] flex justify-center items-center cursor-pointer">
            <i className="fa-regular fa-sun text-xs"></i>
          </button> */}
          <a
            href="#Contact"
            className="bg-(--accent) border border-white/20 transition-all duration-300 ease-in-out hover:bg-(--accent)/20 hover:border-(--accent) text-white px-4 rounded-full h-8.75 flex justify-center items-center cursor-pointer"
          >
            {hireButtonText}
            <i className="fa-solid fa-arrow-right text-xs ml-2"></i>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden border border-white/20 w-8 h-8 p-2 rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i
            className={`transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "fa-solid fa-xmark text-sm sm:text-base rotate-0"
                : "fa-solid fa-bars text-sm sm:text-base rotate-180"
            }`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-75 opacity-100 mt-6 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-5 text-center bg-white/5 py-10">
          {navTabs.map((tabName) => (
            <li key={tabName} className="text-sm sm:text-base">
              <a
                href={`#${tabName}`}
                onClick={() => setIsMenuOpen(false)}
                className={`nav-link text-(--secondary) ${
                  activeSection === tabName ? "active-nav-link" : ""
                }`}
              >
                {tabName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
