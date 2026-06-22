function NavButtons() {
  return (
    <div className="flex gap-6">
      {/* <button className="border-[1px] border-white/20 p-2 rounded-full w-[35px] h-[35px] flex justify-center items-center cursor-pointer">
        <i className="fa-regular fa-sun" style={{ fontSize: "12px"}}></i>
      </button> */}
      <a href="#Contact" className="bg-(--accent) border-white/20 px-4 rounded-l-full rounded-r-full h-8.75 flex justify-center items-center cursor-pointer">
        <p>
          Hire Me{" "}
          <i
            className="fa-solid fa-arrow-right"
            style={{ fontSize: "12px" }}
          ></i>
        </p>
      </a>
    </div>
  );
}

export default NavButtons;
