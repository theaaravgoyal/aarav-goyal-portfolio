import HeroAbout from "./HeroSection/HeroAbout";
import HeroImg from "./HeroSection/HeroImg";
function HeroSection() {
  return (
    <div className="section">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <section
        id="Home"
        className="bg-(--primary) flex flex-col justify-center items-center gap-15 px-10 sm:px-20 pt-35 pb-10 lg:flex-row lg:gap-40 lg:justify-evenly"
      >
        <HeroAbout></HeroAbout>
        <HeroImg></HeroImg>
      </section>
    </div>
  );
}

export default HeroSection;
