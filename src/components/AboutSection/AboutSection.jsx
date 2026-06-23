import AboutImg from "../../assets/Images/self/aaravGoyal.png";

function AboutSection() {
  // --- DATA ---
  const aboutHeader = "About Me";
  const descLg =
    "I'm Aarav Goyal, a Computer Science student from Jaipur with a passion for technology, design, and digital content creation. My journey started with video editing, where I worked with creators and businesses to produce engaging content. Over time, I developed an interest in web development and began learning modern technologies such as HTML, CSS, JavaScript, React, and PHP. Today, I focus on building clean, responsive websites while continuously improving my skills in frontend development and UI design. My goal is to create digital experiences that are both visually appealing and user-friendly.";
  const descSm =
    "I'm Aarav Goyal, a Computer Science student from Jaipur with a passion for technology and web development. I started my journey with video editing and content creation before transitioning into web development. Currently, I work with technologies like HTML, CSS, JavaScript, React, and PHP, focusing on building clean, responsive, and user-friendly websites.";
  const aboutToolsHeader = "STACKS & TOOLS";
  const tools = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "PHP",
    "MySQL",
    "Figma",
    "Premiere Pro",
    "After Effects",
    "Git",
    "GitHub",
    "VS Code",
    "Bootstrap",
  ];
  // ------------

  return (
    <section
      id="About"
      className="bg-(--primary) flex flex-col min-h-screen gap-10 lg:flex-row items-center justify-evenly lg:gap-40 px-10 sm:px-20 py-20 scroll-mt-8"
    >
      {/* About Image */}
      <div className="w-full max-w-200 h-[400px] rounded-4xl overflow-hidden">
        <img
          className="w-full h-full object-cover object-[center_12%]"
          src={AboutImg}
          alt="Aarav Goyal Portrait"
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-10 lg:gap-6 w-fit">
        {/* Heading */}
        <h1 className="text-white font-extrabold mt-3 lg:mb-5 text-start text-3xl sm:text-6xl">
          {aboutHeader}
        </h1>

        <div className="flex flex-col justify-center items-start gap-10 lg:gap-15 w-full">
          {/* Description — lg screens pe short, xl pe long */}
          <p className="text-(--secondary) lg:hidden xl:inline-block text-sm sm:text-base text-start">
            {descLg}
          </p>
          <p className="text-(--secondary) hidden lg:inline-block xl:hidden text-sm sm:text-base text-start">
            {descSm}
          </p>

          {/* Tools Section */}
          <div className="flex flex-col justify-center items-start gap-10 lg:gap-5">
            {/* Tools Header */}
            <p className="text-(--secondary) font-light sm:font-normal text-sm">
              {aboutToolsHeader}
            </p>

            {/* Tools List */}
            <ul className="text-white flex gap-3 flex-wrap justify-start items-center lg:justify-start">
              {tools.map((tool, index) => (
                <li
                  key={index}
                  className="bg-[#333333] w-fit px-2 py-1 sm:px-3 sm:py-2 rounded-full border border-(--secondary)/20 transition-all duration-200 ease-in-out hover:-translate-y-0.75 sm:hover:-translate-y-1.25 hover:border-(--accent) hover:bg-(--accent)/20 my-1 text-sm"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
