import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
NEW PROJECT INQUIRY

Name: ${name}

Email: ${email}

Subject: ${subject}

Details:
${message}

---
Sent from Portfolio Website
`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/919660074270?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <form
      className="text-white flex w-full flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full gap-6 justify-start items-center">
        <div className="flex flex-col gap-2 justify-center items-start w-full">
          <label htmlFor="Name">Name *</label>
          <input
            className="text-white w-full bg-black/20 border border-(--secondary)/20 px-4 py-3 rounded-md text-sm"
            type="text"
            id="Name"
            placeholder="Jane Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-2 justify-center items-start w-full">
          <label htmlFor="Email">Email *</label>
          <input
            className="text-white w-full bg-black/20 border border-(--secondary)/20 px-4 py-3 rounded-md text-sm"
            type="email"
            id="Email"
            placeholder="jane@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 justify-center items-start">
        <label htmlFor="Subject">Subject</label>
        <input
          className="text-white w-full bg-black/20 border border-(--secondary)/20 px-4 py-3 rounded-md text-sm"
          type="text"
          id="Subject"
          placeholder="Project inquiry"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 justify-center items-start">
        <label htmlFor="Message">Message *</label>
        <textarea
          rows="5"
          className="text-white w-full bg-black/20 border border-(--secondary)/20 px-4 py-3 rounded-md text-sm"
          id="Message"
          placeholder="Tell me about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button
        className="cursor-pointer bg-(--accent) w-fit px-5 py-3 mt-3 rounded-l-full rounded-r-full self-center hover:bg-(--accent)/50 transition-all duration-300 ease-in-out"
        type="submit"
      >
        Send Message{" "}
        <i
          className="fa-solid fa-arrow-right"
          style={{ fontSize: "12px" }}
        ></i>
      </button>
    </form>
  );
}

export default ContactForm;