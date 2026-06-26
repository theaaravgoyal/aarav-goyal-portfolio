import ContactForm from "./ContactForm";
import RedPingDot from "../common/RedPingDot";

function ContactSection() {
  // --- HEADER ---
  const contactStatus = "GET IN TOUCH";
  const contactHeader = "Let's Build Something Great";
  const desc =
    "Have a project in mind or need help with web development or video editing? I'd love to hear about your ideas and discuss how we can bring them to life.";
  // --------------

  // --- DATA ---
  const contactLinks = [
    {
      iconClass: "fa-regular fa-envelope",
      link: "mailto:aaravgoyal.media@gmail.com",
      linkName: "Email",
    },
    {
      iconClass: "fa-brands fa-instagram",
      link: "https://www.instagram.com/aarav_._goyal",
      linkName: "Instagram",
    },
    {
      iconClass: "fa-brands fa-whatsapp",
      link: "https://wa.me/919660074270",
      linkName: "Whatsapp",
    },
  ];
  // ------------

  return (
    <section
      id="Contact"
      className="bg-(--primary) sm:px-20 ptn-20 min-h-screen flex justify-center items-center lg:px-20"
    >
      <div className="section lg:rounded-4xl w-full">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>

        <div className="flex flex-col xl:flex-row justify-evenly items-center mx-auto gap-15 xl:gap-40 px-5 py-20 lg:p-20 lg:rounded-4xl shadow-2xl">
          {/* Left Column */}
          <div className="flex flex-col min-w-[40%] items-start justify-center gap-10 xl:gap-6">

            {/* Heading Block */}
            <div className="flex flex-col justify-center items-start gap-6 lg:gap-3">

              {/* Status badge — desktop only */}
              <div className="hidden lg:flex gap-2 justify-start items-center self-start">
                <RedPingDot />
                <p className="text-(--accent)">{contactStatus}</p>
              </div>

              {/* Heading */}
              <h1 className="text-white font-extrabold text-3xl sm:text-6xl text-start">
                {contactHeader}
              </h1>

              {/* Description */}
              <p className="text-(--secondary) text-sm sm:text-base text-start">
                {desc}
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-row lg:flex-col gap-5 lg:gap-3">
              {contactLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex justify-start items-center gap-2 group"
                >
                  {/* Icon */}
                  <span className="bg-(--secbg) p-4 rounded-xl flex justify-center items-center text-sm text-(--secondary) group-hover:text-white group-hover:bg-(--accent)/20 transition-all duration-300 ease-in-out">
                    <i className={item.iconClass} />
                  </span>

                  {/* Link Name — desktop only */}
                  <span className="montserrat-normal text-sm text-(--secondary) hidden lg:block group-hover:text-white transition-all duration-300 ease-in-out">
                    {item.linkName}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
