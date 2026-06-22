function AboutToolBtn({Tool}){
  return(
    <li className="bg-[#333333] w-fit px-2 py-1 sm:px-3 sm:py-2 rounded-l-full text-sm rounded-r-full border border-(--secondary)/20 transition-all duration-200 ease-in-out hover:-translate-y-0.75 sm:hover:-translate-y-1.25 hover:border-(--accent) hover:bg-(--accent)/20 my-1">{Tool}</li>
  )
}

export default AboutToolBtn;