import RedPingDot from "../RedPingDot";
function ReviewHeader() {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-2">
      <div className="lg:flex gap-2 justify-start items-center hidden">
        <RedPingDot></RedPingDot>
        <p className="text-(--accent)">SOCIAL PROOF</p>
      </div>
      <h1 className="text-white font-extrabold text-center lg:text-start text-3xl sm:text-6xl">What clients say</h1>
    </div>
  );
}

export default ReviewHeader;
