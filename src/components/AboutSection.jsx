import AboutSectionContainer from "./AboutSection/AboutSectionContainer";
import AboutImg from "./AboutSection/AboutImg";
function AboutSection(){
  return(
    <section id="About" className="bg-(--primary) flex flex-col gap-10 lg:flex-row items-center justify-evenly lg:gap-40 px-10 sm:px-20 py-10 scroll-mt-24">
      <AboutImg></AboutImg>
      <AboutSectionContainer></AboutSectionContainer>
    </section>
  )
}

export default AboutSection;