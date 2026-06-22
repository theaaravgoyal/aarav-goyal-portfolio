import AboutToolBtn from "./AboutToolBtn";
function AboutToolsContainer({ Tools }) {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-10 lg:gap-3">
    <p className="text-(--secondary) sm:font-normal font-light text-sm">STACKS & TOOLS</p>
    <ul className="text-white flex gap-3 flex-wrap justify-center items-center lg:justify-start">
      {Tools.map((Tool) => (
        <AboutToolBtn key={Tool }Tool={Tool}></AboutToolBtn>
      ))}
    </ul>
    </div>
  );
}

export default AboutToolsContainer;
