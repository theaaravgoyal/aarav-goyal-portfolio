import ReviewCard from "./ReviewCard";
function ReviewCardContainer(){
  return(
    <div className="flex flex-wrap lg:flex-nowrap gap-5 sm:gap-10 lg:gap-6 items-center justify-between">
      <ReviewCard Review="Aarav was easy to work with and delivered exactly what was discussed. Communication was clear throughout the project, and the final website looked professional and polished." ImgSrc="/bharatTamang.jpg" Name="Bharat Tamang" Post="Small Business Owner"></ReviewCard>
      <ReviewCard Review="The attention to detail and design quality stood out immediately. Every revision was handled quickly, and the final result exceeded our expectations." ImgSrc="/GkKumawat.jpg" Name="GK Kumawat" Post="Startup Founder"></ReviewCard>
      <ReviewCard Review="Fast delivery, clean code, and a smooth overall experience. The website works perfectly across devices and has received great feedback from our customers." ImgSrc="/gofiwaKgang.jpg" Name="Gofiwa Kgang" Post="Local Business Client"></ReviewCard>
    </div>
  )
}

export default ReviewCardContainer;