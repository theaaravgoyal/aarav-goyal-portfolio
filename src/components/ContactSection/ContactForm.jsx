import { useState } from "react";

function ContactForm() {
  // Single object state — cleaner than 4 separate states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Generic handler — works for all fields via id matching
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format WhatsApp message
    const whatsappMessage = `
NEW PROJECT INQUIRY

Name: ${formData.name}

Email: ${formData.email}

Subject: ${formData.subject}

Details:
${formData.message}

---
Sent from Portfolio Website
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919660074270?text=${encodedMessage}`, "_blank");
  };

  // Shared input classes
  const inputClass =
    "text-white w-full bg-black/20 border border-(--secondary)/20 px-4 py-3 rounded-md text-[10px] sm:text-sm";

  return (
    <form
      className="text-white flex w-full flex-col gap-6"
      onSubmit={handleSubmit}
    >
      {/* Name & Email Row */}
      <div className="flex w-full gap-6 justify-start items-center">
        <div className="flex flex-col gap-2 justify-center items-start w-full">
          <label htmlFor="name" className="text-sm sm:text-base">
            Name *
          </label>
          <input
            className={inputClass}
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-start w-full">
          <label htmlFor="email" className="text-sm sm:text-base">
            Email *
          </label>
          <input
            className={inputClass}
            type="email"
            id="email"
            placeholder="abc@xyz.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-2 justify-center items-start">
        <label htmlFor="subject" className="text-sm sm:text-base">
          Subject
        </label>
        <input
          className={inputClass}
          type="text"
          id="subject"
          placeholder="Project inquiry"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 justify-center items-start">
        <label htmlFor="message" className="text-sm sm:text-base">
          Message *
        </label>
        <textarea
          rows="5"
          className={inputClass}
          id="message"
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        className="cursor-pointer bg-(--accent) w-fit px-5 py-3 mt-5 sm:mt-3 lg:mt-7 xl:mt-3 rounded-full hover:bg-(--accent)/50 transition-all duration-300 ease-in-out text-sm sm:text-base"
        type="submit"
      >
        Send Message <i className="fa-solid fa-arrow-right text-xs"></i>
      </button>
    </form>
  );
}

export default ContactForm;
