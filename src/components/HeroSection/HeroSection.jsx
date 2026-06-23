import RedPingDot from "../common/RedPingDot";
import HeroImg from "../../assets/Images/self/aaravGoyal.png";

function HeroSection() {
  // --- DATA (change anything here, no need to scroll down) ---
  const heroStatus = "AVAILABLE FOR FREELANCE PROJECTS";
  const heroDescLg =
    "Frontend Developer & Video Editor. Currently pursuing B.Tech in CSE (AI), I combine design, development, and storytelling to help businesses and creators establish a strong digital presence.";
  const heroDescSm =
    "Frontend Developer, Video Editor, and B.Tech CSE (AI) student passionate about building impactful digital experiences. I blend design, development, and visual storytelling to create modern websites and engaging content that help businesses and creators stand out online. My experience spans frontend technologies, graphic design, video production, and user-focused design, allowing me to deliver solutions that are both visually appealing and functional. Driven by curiosity and continuous learning, I am constantly refining my skills and exploring new technologies to create meaningful digital products.";
  const button1Text = "View my work";
  const button2Text = "Get in touch";
  const lgText = "Open to projects";
  const smText = "Available";
  const heroData = [
    { data: "10", suffix: "+", descLg: "Projects done", descSm: "Projects" },
    { data: "5", suffix: "+", descLg: "Happy Clients", descSm: "Clients" },
    { data: "2", suffix: "+", descLg: "Years experience", descSm: "Yrs exp." },
  ];
  // -----------------------------------------------------------

  return (
    <div className="section">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      <section
        id="Home"
        className="bg-(--primary) min-h-screen flex flex-col justify-center items-center gap-15 px-10 sm:px-20 pt-30 pb-20 lg:flex-row lg:gap-40 lg:justify-evenly"
      >
        {/* Left Column */}
        <div>
          <div className="flex flex-col gap-5 justify-center items-start mb-20">
            {/* Status */}
            <div className="hidden lg:flex gap-2 justify-center items-center">
              <RedPingDot />
              <p className="text-(--accent) uppercase">{heroStatus}</p>
            </div>

            {/* Heading */}
            <h1 className="text-white font-extrabold mb-5 text-3xl sm:text-6xl text-start">
              Hi, I'm <span className="text-(--accent)">Aarav</span>
            </h1>

            {/* Description */}
            <p className="hidden lg:inline-block text-(--secondary) text-sm sm:text-base text-start mb-7">
              {heroDescLg}
            </p>
            <p className="inline-block lg:hidden text-(--secondary) text-sm sm:text-base text-start mb-7">
              {heroDescSm}
            </p>

            {/* Buttons */}
            <div className="flex gap-6 justify-center items-center">
              <button className="bg-white hover:bg-black hover:text-white hover:border-white/20 border border-black text-black px-4 py-2 sm:px-5 sm:py-3 rounded-full cursor-pointer text-sm transition-all duration-300 ease-in-out">
                <a href="#Services" className="text-nowrap">
                  {button1Text} <i className="fa-solid fa-angle-down"></i>
                </a>
              </button>
              <button className="hidden lg:flex justify-center items-center text-white border hover:bg-(--accent)/20 hover:border-(--accent) border-white/20 px-4 py-2 sm:px-5 sm:py-3 rounded-full cursor-pointer text-sm transition-all duration-300 ease-in-out">
                <a href="#Contact" className="text-nowrap">
                  {button2Text} <i className="fa-solid fa-angle-down"></i>
                </a>
              </button>
            </div>
          </div>

          {/* Data Board */}
          <div className="flex items-center justify-between">
            {heroData.map((item, index) => (
              <>
                <div key={index} className="flex items-center">
                  <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-white font-bold text-xl sm:text-3xl">
                      {item.data}
                      {item.suffix}
                    </span>
                    <span className="hidden lg:inline-block text-(--secondary) text-center text-nowrap text-sm sm:text-base transition-all duration-200 ease-in-out hover:text-white">
                      {item.descLg}
                    </span>
                    <span className="inline-block lg:hidden text-(--secondary) text-center text-nowrap text-sm sm:text-base transition-all duration-200 ease-in-out hover:text-white">
                      {item.descSm}
                    </span>
                  </div>
                </div>
                {index < heroData.length - 1 && (
                  <div className="border-r w-0 h-10 border-(--secondary)/50"></div>
                )}
              </>
            ))}
          </div>
        </div>

        {/* Right Column — Image */}
        <div className="w-full max-w-200 h-[400px]">
          <img
            className="w-full h-full object-cover object-[center_12%] rounded-4xl scale-x-[-1]"
            src={HeroImg}
            alt="Aarav Goyal Portrait"
          />
          <div className="bg-(--accent) text-white w-fit h-fit relative bottom-10 lg:-left-14 px-4 py-3 transition-all duration-300 ease-in-out hover:-translate-y-2 rounded-full">
            <p className="hidden lg:inline-block text-sm">{lgText}</p>
            <p className="inline-block lg:hidden text-sm">{smText}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
