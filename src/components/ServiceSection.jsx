import ServiceHeader from "./ServiceSection/ServiceHeader";
import ServiceCardsContainer from "./ServiceSection/ServiceCardsContainer";
function ServiceSection() {
  return (
    <section id="Services" className="bg-(--secbg) px-10 sm:px-20 py-10 flex flex-col justify-center items-center lg:items-start gap-6 scroll-mt-24" >
      <ServiceHeader></ServiceHeader>  
      <ServiceCardsContainer></ServiceCardsContainer>
    </section>
  );
}

export default ServiceSection;
