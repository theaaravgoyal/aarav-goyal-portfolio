import ReviewHeader from "./ReviewSection/ReviewHeader";
import ReviewCardContainer from "./ReviewSection/ReviewCardContainer";
function ReviewSection(){
  return(
    <section id="Reviews" className="bg-(--secbg) flex flex-col items-center gap-10 lg:items-start justify-center lg:gap-6 px-10 sm:px-20 py-10 scroll-mt-24">
      <ReviewHeader></ReviewHeader>
      <ReviewCardContainer></ReviewCardContainer>
    </section>
  )
}

export default ReviewSection;