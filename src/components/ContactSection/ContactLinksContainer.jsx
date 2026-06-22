import ContactLink from "./ContactLink";
function ContactLinksContainer() {
  return (
    <div className="flex flex-row lg:flex-col gap-10 lg:gap-3">
      <ContactLink
        Icon={<i className="fa-regular fa-envelope"></i>}
        Link="mailto:aaravgoyal.media@gmail.com"
        LinkName="Email"
      ></ContactLink>
      <ContactLink
        Icon={<i className="fa-brands fa-instagram"></i>}
        Link="https://www.instagram.com/aarav_._goyal"
        LinkName="Instagram"
      ></ContactLink>
      <ContactLink
        Icon={<i className="fa-brands fa-whatsapp"></i>}
        Link="https://wa.me/919660074270"
        LinkName="Whatsapp"
      ></ContactLink>
    </div>
  );
}
export default ContactLinksContainer;
