import RedPingDot from "../common/RedPingDot";

function ServiceSection() {

  // --- DATA ---
  const serviceStatus = "WHAT I DO";
  const serviceHeader = "Services";
  const serviceCardsData = [
    {
      iconClass: "fa-solid fa-code",
      heading: "Web Development",
      desc: "Responsive websites built using modern technologies with a focus on performance and user experience.",
    },
    {
      iconClass: "fa-solid fa-photo-film",
      heading: "Video Editing",
      desc: "Professional editing for YouTube videos, social media content, promotional videos, and personal brands.",
    },
    {
      iconClass: "fa-solid fa-bezier-curve",
      heading: "UI Design",
      desc: "Clean and intuitive interface designs focused on usability and visual consistency.",
    },
    {
      iconClass: "fa-solid fa-chart-pie",
      heading: "Content Optimization",
      desc: "Improving content presentation, pacing, and structure to maximize audience engagement.",
    },
  ];
  // ------------

  return (
    <section
      id="Services"
      className="bg-(--secbg) px-5 sm:px-20 py-20 min-h-screen flex flex-col justify-center items-start gap-6 scroll-mt-10"
    >
      {/* Section Header */}
      <div className="flex flex-col justify-center items-start gap-2 mb-5">

        {/* Status badge — desktop only */}
        <div className="gap-2 justify-start items-center hidden lg:flex">
          <RedPingDot />
          <p className="text-(--accent)">{serviceStatus}</p>
        </div>

        {/* Heading */}
        <h1 className="text-white font-extrabold text-3xl sm:text-6xl">
          {serviceHeader}
        </h1>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col w-full gap-8">
        {serviceCardsData.map((card, index) => (
          <div
            key={index}
            className="text-white flex flex-col justify-center items-start gap-1 w-full border border-[#111114] bg-[#111114] p-5 sm:p-10 rounded-2xl transition-all duration-300 ease-in-out hover:border-(--accent) hover:-translate-y-2.5"
          >
            {/* Icon Box */}
            <div className="bg-[#222228] border border-(--secondary)/20 rounded-md sm:rounded-xl w-fit p-2 sm:p-3 mb-2 text-sm sm:text-base hover:bg-(--accent)/20 transition-all duration-200 ease-in-out flex justify-center items-center">
              <i className={`${card.iconClass} text-(--accent)`}></i>
            </div>

            {/* Card Heading */}
            <div className="font-bold sm:font-extrabold">
              {card.heading}
            </div>

            {/* Card Description */}
            <div className="text-sm font-light sm:font-normal">
              {card.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;