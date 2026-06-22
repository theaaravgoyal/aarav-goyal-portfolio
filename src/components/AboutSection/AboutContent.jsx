import AboutToolsContainer from "./AboutToolsContainer";

function AboutContent() {
  let DescLg =
    "I'm Aarav Goyal, a Computer Science student from Jaipur with a passion for technology, design, and digital content creation. My journey started with video editing, where I worked with creators and businesses to produce engaging content. Over time, I developed an interest in web development and began learning modern technologies such as HTML, CSS, JavaScript, React, and PHP. Today, I focus on building clean, responsive websites while continuously improving my skills in frontend development and UI design. My goal is to create digital experiences that are both visually appealing and user-friendly.";
  let DescSm =
    "I'm Aarav Goyal, a Computer Science student from Jaipur with a passion for technology and web development. I started my journey with video editing and content creation before transitioning into web development. Currently, I work with technologies like HTML, CSS, JavaScript, React, and PHP, focusing on building clean, responsive, and user-friendly websites.";
  const Tools = [
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
  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-10 lg:gap-6 w-full">
      <p className="text-(--secondary) lg:hidden xl:inline-block text-center text-sm sm:text-base lg:text-start">
        {DescLg}
      </p>
      <p className="text-(--secondary) hidden lg:inline-block xl:hidden text-center text-sm sm:text-base lg:text-start">
        {DescSm}
      </p>
      <AboutToolsContainer Tools={Tools}></AboutToolsContainer>
    </div>
  );
}

export default AboutContent;
