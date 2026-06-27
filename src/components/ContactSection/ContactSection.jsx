import ContactForm from "./ContactForm";
import RedPingDot from "../common/RedPingDot";

function ContactSection() {
  // --- HEADER ---
  const contactStatus = "GET IN TOUCH";
  const contactHeader = "Let's Build Something Great";
  const desc =
    "Have a project in mind or need help with web development or video editing? I'd love to hear about your ideas, understand your goals, and discuss how we can bring your vision to life. Whether you're starting from scratch or improving an existing project, let's work together to create something functional, visually appealing, and impactful.";
  // --------------

  return (
    <section
      id="Contact"
      className="bg-(--primary) md:px-20 md:pt-20 min-h-screen flex justify-center items-center lg:px-20"
    >
      <div className="section sm:px-10 lg:px-10 md:rounded-4xl w-full">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>

        <div className="flex flex-col xl:flex-row justify-evenly items-start lg:items-center mx-auto gap-15 xl:gap-40 px-5 py-20 lg:p-20 lg:rounded-4xl shadow-2xl">
          {/* Left Column */}
          <div className="flex flex-col xl:max-w-[40%] items-start justify-center gap-10 xl:gap-6">
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
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
