function ContactLink({ Icon, Link, LinkName }) {
  return (
    <a
      href={Link}
      target={Link.startsWith("http") ? "_blank" : "_self"}
      rel={Link.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex justify-start items-center gap-2 group"
    >
      <span className="bg-(--secbg) p-4 rounded-xl flex justify-center items-center text-sm text-(--secondary) group-hover:text-white group-hover:bg-(--accent)/20 transition-all duration-300 ease-in-out">
        {Icon}
      </span>

      <span className="montserrat-normal text-sm text-(--secondary) hidden lg:block group-hover:text-white transition-all duration-300 ease-in-out">
        {LinkName}
      </span>
    </a>
  );
}

export default ContactLink;