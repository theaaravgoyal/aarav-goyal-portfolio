import FiveStarRating from "./FiveStarRating";
import ReviewAccount from "./ReviewAccount";
function ReviewCard({ Review, ImgSrc, Name, Post }) {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start justify-center bg-[#111111] rounded-2xl sm:rounded-4xl w-fit px-4 py-5 sm:p-7 border border-(--secondary)/20 transition-all duration-200 ease-in-out hover:-translate-y-1.25 hover:border-(--accent) hover:bg-(--accent)/20">
      <FiveStarRating></FiveStarRating>
      <p className="text-(--secondary) montserrat-light-italic text-sm sm:text-base text-center lg:text-start">"{Review}"</p>
      <ReviewAccount ImgSrc={ImgSrc} Name={Name} Post={Post}></ReviewAccount>
    </div>
  );
}

export default ReviewCard;
