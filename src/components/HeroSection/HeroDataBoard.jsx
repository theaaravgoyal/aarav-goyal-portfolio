import HeroDataBoardCard from "./HeroDataBoardCard";
function HeroDataBoard() {
  let NumberProjects = "10";
  let NumberClients = "5";
  let NumberExperience = "2";
  return (
    <div className="flex justify-center items-center lg:justify-start gap-6">
      <HeroDataBoardCard
        Data={NumberProjects}
        Suffix="+"
        Desc="Projects done"
      />
      <HeroDataBoardCard Data={NumberClients} Suffix="+" Desc="Happy Clients" />
      <HeroDataBoardCard
        Data={NumberExperience}
        Suffix="+"
        Desc="Years experience"
      />
    </div>
  );
}

export default HeroDataBoard;
