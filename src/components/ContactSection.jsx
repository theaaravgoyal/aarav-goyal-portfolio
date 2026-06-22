import ContactForm from "./ContactSection/ContactForm";
import ContactContent from "./ContactSection/ContactContent";
function ContactSection() {
  return (
    <section id="Contact" className="bg-(--primary) py-10 px-20 scroll-mt-16">
      <div className="section rounded-4xl">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center mx-auto gap-20 lg:gap-40 p-20 rounded-4xl shadow-2xl">
          <ContactContent></ContactContent>
          <ContactForm></ContactForm>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
