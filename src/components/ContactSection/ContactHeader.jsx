import RedPingDot from "../RedPingDot";
function ContactHeader() {
  let Desc =
    "Have a project in mind or need help with web development or video editing? I'd love to hear about your ideas and discuss how we can bring them to life.";
  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-6 lg:gap-3">
      <div className="lg:flex gap-2 hidden justify-start items-center self-start px-20 lg:px-0">
        <RedPingDot></RedPingDot>
        <p className="text-(--accent)">GET IN TOUCH</p>
      </div>
      <h1 className="text-white font-extrabold text-6xl text-center lg:text-start">
        Let's Build Something Great
      </h1>
      <p className="text-(--secondary) text-center lg:text-start">{Desc}</p>
    </div>
  );
}

export default ContactHeader;
