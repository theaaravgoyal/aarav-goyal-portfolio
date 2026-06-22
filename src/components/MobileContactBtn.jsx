import { useState } from "react";
import ContactLink from "./MobileContactBtn/ContactLink";

function MobileContactBtn() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white bg-(--accent) w-11 h-11 sm:w-13 sm:h-13 rounded-full flex justify-center items-center lg:hidden fixed z-20 bottom-5 sm:bottom-10 right-5 sm:right-10 transition-all duration-300 ease-in-out cursor-pointer"
      >
        <span
          className={`transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-[360deg]" : "rotate-0"
          }`}
        >
          <i
            className={`text-sm sm:text-xl ${
              isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-at"
            }`}
          ></i>
        </span>
      </button>

      <div
        className={`lg:hidden fixed bottom-11 right-11 sm:bottom-15 sm:right-15 z-10 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1.5 sm:gap-3 p-4 sm:p-8 rounded-2xl bg-black/95 border border-white/10">
          <ContactLink
            Icon={<i className="fa-regular fa-envelope"></i>}
            Link="mailto:aaravgoyal.media@gmail.com"
            LinkName="Email"
          />

          <ContactLink
            Icon={<i className="fa-brands fa-instagram"></i>}
            Link="https://www.instagram.com/aarav_._goyal"
            LinkName="Instagram"
          />

          <ContactLink
            Icon={<i className="fa-brands fa-whatsapp"></i>}
            Link="https://wa.me/919660074270"
            LinkName="Whatsapp"
          />
        </div>
      </div>
    </>
  );
}

export default MobileContactBtn;
