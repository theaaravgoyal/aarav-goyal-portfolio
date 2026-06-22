import RedPingDot from "../RedPingDot";
function ServiceHeader() {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-2">
      <div className="gap-2 justify-start items-center hidden lg:flex">
        <RedPingDot></RedPingDot>
        <p className="text-(--accent)">WHAT I DO</p>
      </div>
      <h1 className="text-white font-extrabold text-3xl sm:text-6xl">Services</h1>
    </div>
  );
}

export default ServiceHeader;
