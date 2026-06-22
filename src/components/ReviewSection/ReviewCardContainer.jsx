import ReviewCard from "./ReviewCard";
function ReviewCardContainer(){
  return(
    <div className="flex flex-wrap lg:flex-nowrap gap-5 sm:gap-10 lg:gap-6 items-center justify-between">
      <ReviewCard Review="Eliott delivered our redesign in record time and the quality blew us away. Our conversion rate jumped 28% in the first month. Absolutely recommend." ImgSrc="public/bharatTamang.jpg" Name="Bharat Tamang" Post="CPO, Novu"></ReviewCard>
      <ReviewCard Review="Working with Eliott is a dream. He asks the right questions, moves fast, and the final result always exceeds what we imagined. Our best hire of 2024." ImgSrc="public/GkKumawat.jpg" Name="GK Kumawat" Post="Founder, Finlo"></ReviewCard>
      <ReviewCard Review="We had a tight deadline and a vague brief. Eliott turned both into a polished site in under two weeks. Clean code, zero hand-holding needed." ImgSrc="public/gofiwaKgang.jpg" Name="Gofiwa Kgang" Post="Creative Director, Orea"></ReviewCard>
    </div>
  )
}

export default ReviewCardContainer;