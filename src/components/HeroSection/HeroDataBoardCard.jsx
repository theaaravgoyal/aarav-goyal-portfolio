function HeroDataBoardCard({ Data, Suffix, Desc }) {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-2">
      <span className="text-white font-bold text-xl sm:text-3xl">
        {Data}
        {Suffix}
      </span>
      <span className="text-(--secondary) text-center text-sm sm:text-base transition-all duration-200 ease-in-out hover:text-white">{Desc}</span>
    </div>
  );
}

export default HeroDataBoardCard;
