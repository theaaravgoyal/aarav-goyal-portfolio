function ReviewAccount({ ImgSrc, Name, Post }) {
  return (
    <div className="flex lg:flex-row flex-col justify-start items-center gap-3">
      <div className="w-10 h-10 sm:w-15 sm:h-15 rounded-full overflow-hidden">
        <img src={ImgSrc} alt="Review Profile Picture" className="w-full h-full object-cover object-[center_20%]"/>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start">
        <p className="text-white font-normal sm:font-medium">{Name}</p>
        <p className="text-(--secondary) font-light sm:font-normal text-sm text-center lg:text-start">{Post}</p>
      </div>
    </div>
  );
}
export default ReviewAccount;
