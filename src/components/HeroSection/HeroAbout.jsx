import Status from "./HeroStatus";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroCTABtn from "./HeroCTABtn";
import HeroDataBoard from "./HeroDataBoard";
function HeroAbout() {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center lg:items-start pb-10 mb-10 border-b border-white/20">
        <div className="hidden lg:inline-block">
          <Status />
        </div>
        <HeroHeading></HeroHeading>
        <HeroDescription></HeroDescription>
        <HeroCTABtn></HeroCTABtn>
      </div>
      <HeroDataBoard></HeroDataBoard>
    </div>
  );
}

export default HeroAbout;
