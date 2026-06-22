import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";
function AboutSectionContainer(){
  return(
    <div className="flex flex-col gap-10 lg:gap-6 w-fit">
      <AboutHeader></AboutHeader>
      <AboutContent></AboutContent>
    </div>
  )
}

export default AboutSectionContainer;