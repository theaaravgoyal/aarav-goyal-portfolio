import ServiceCard from "./ServiceCards";
function ServiceCardsContainer() {
  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-8">
      <ServiceCard
        Icon={
          <i className="fa-solid fa-code text-(--accent)"></i>
        }
        Heading="Web Development"
        Desc="Responsive websites built using modern technologies with a focus on performance and user experience."
      ></ServiceCard>
      <ServiceCard
        Icon={<i className="fa-solid text-(--accent) fa-photo-film"></i>}
        Heading="Video Editing"
        Desc="Professional editing for YouTube videos, social media content, promotional videos, and personal brands."
      ></ServiceCard>
      <ServiceCard
        Icon={
          <i class="fa-solid text-(--accent) fa-bezier-curve"></i>
        }
        Heading="UI Design"
        Desc="Clean and intuitive interface designs focused on usability and visual consistency."
      ></ServiceCard>
      <ServiceCard
        Icon={
          <i className="fa-solid fa-chart-pie text-(--accent)"></i>
        }
        Heading="Content Optimization"
        Desc="Improving content presentation, pacing, and structure to maximize audience engagement."
      ></ServiceCard>
    </div>
  );
}

export default ServiceCardsContainer;
