function HeroCTABtn() {
  return (
    <div className="HeroButtonsContainer flex gap-6 justify-center items-center">
      <button className="bg-white hover:bg-black hover:text-white hover:border-white/20 border border-black text-black px-4 py-2 sm:px-5 px-4 py-2 sm:py-3 rounded-l-full rounded-r-full cursor-pointer text-sm transition-all duration-300 ease-in-out">
        <a href="#Services">
          View my work
        </a>
      </button>
      <button className="text-white border hover:bg-(--accent)/20 hover:border-(--accent) text-center border-white/20 px-4 py-2 sm:px-5 px-4 py-2 sm:py-3 rounded-l-full rounded-r-full cursor-pointer text-sm transition-all duration-300 ease-in-out">
        <a href="#Contact">
          Get in touch
        </a>
      </button>
    </div>
  );
}

export default HeroCTABtn;
