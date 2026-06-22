function ServiceCard({ Icon, Heading, Desc }) {
  return (
    <div className="text-white flex flex-col justify-center items-start gap-1 w-full border border-[#111114] bg-[#111114] p-5 sm:p-10 rounded-2xl transition-all duration-1000 ease-in-out hover:border hover:border-(--accent) hover:translate-y-[-10px]">
      <div className="bg-[#222228] border border-(--secondary)/20 rounded-md sm:rounded-xl w-fit p-2 sm:p-3 mb-2 text-sm sm:text-base hover:bg-[#ff6b2b]/20 transition-all duration-200 ease-in-out flex justify-center items-center">{Icon}</div>
      <div className="sm:font-extrabold font-bold">{Heading}</div>
      <div className="text-sm sm:font-normal font-light">{Desc}</div>
    </div>
  );
}

export default ServiceCard;
