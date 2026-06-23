import RedPingDot from "../common/RedPingDot";
import FiveStarRating from "../common/FiveStarRating";
import bharatTamangImg from "../../assets/Images/reviews/bharatTamang.jpg";
import GkKumawatImg from "../../assets/Images/reviews/GkKumawat.jpg";
import gofiwaKgangImg from "../../assets/Images/reviews/gofiwaKgang.jpg";

function ReviewSection() {
  //--- HEADER ---
  const reviewStatus = "SOCIAL PROOF";
  const reviewHeader = "What clients say";
  //-------------

  // --- DATA ---
  const reviewsData = [
    {
      review:
        "Aarav was easy to work with and delivered exactly what was discussed. Communication was clear throughout the project, and the final website looked professional and polished.",
      imgSrc: bharatTamangImg,
      name: "Bharat Tamang",
      post: "Small Business Owner",
    },
    {
      review:
        "The attention to detail and design quality stood out immediately. Every revision was handled quickly, and the final result exceeded our expectations.",
      imgSrc: GkKumawatImg,
      name: "GK Kumawat",
      post: "Startup Founder",
    },
    {
      review:
        "Fast delivery, clean code, and a smooth overall experience. The website works perfectly across devices and has received great feedback from our customers.",
      imgSrc: gofiwaKgangImg,
      name: "Gofiwa Kgang",
      post: "Local Business Client",
    },
  ];
  // ------------

  return (
    <section
      id="Reviews"
      className="bg-(--secbg) min-h-screen flex flex-col items-start justify-center gap-10 lg:gap-6 px-10 sm:px-20 py-20 scroll-mt-10"
    >
      {/* Section Header */}
      <div className="flex flex-col justify-center items-start gap-2 mb-5">
        {/* Status badge — desktop only */}
        <div className="hidden lg:flex gap-2 justify-start items-center">
          <RedPingDot />
          <p className="text-(--accent)">{reviewStatus}</p>
        </div>

        {/* Heading */}
        <h1 className="text-white font-extrabold text-start text-3xl sm:text-6xl">
          {reviewHeader}
        </h1>
      </div>

      {/* Review Cards */}
      <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-6 items-stretch justify-between w-full">
        {reviewsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center lg:items-start justify-center bg-[#111111] rounded-2xl sm:rounded-4xl w-full lg:w-auto px-4 py-5 sm:p-7 border border-(--secondary)/20 transition-all duration-200 ease-in-out hover:-translate-y-1.25 hover:border-(--accent) hover:bg-(--accent)/20"
          >
            {/* Star Rating */}
            <FiveStarRating />

            {/* Review Text */}
            <p className="text-(--secondary) montserrat-light-italic text-sm sm:text-base text-center lg:text-start">
              "{item.review}"
            </p>

            {/* Reviewer Info */}
            <div className="flex lg:flex-row flex-col justify-start items-center gap-3">
              {/* Profile Picture */}
              <div className="w-10 h-10 sm:w-15 sm:h-15 rounded-full overflow-hidden">
                <img
                  src={item.imgSrc}
                  alt={`${item.name} profile picture`}
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>

              {/* Name & Post */}
              <div className="flex flex-col justify-center items-center lg:items-start">
                <p className="text-white font-normal sm:font-medium">
                  {item.name}
                </p>
                <p className="text-(--secondary) font-light sm:font-normal text-sm text-center lg:text-start">
                  {item.post}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;
