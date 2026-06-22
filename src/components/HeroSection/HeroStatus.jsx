import RedPingDot from "../RedPingDot";
function Status() {
  return (
    <div className="HeroStatus flex gap-2 justify-center items-center">
      <RedPingDot></RedPingDot>
      <p
        className="text-(--accent)"
        style={{ textTransform: "uppercase" }}
      >
        AVAILABLE FOR FREELANCE PROJECTS
      </p>
    </div>
  );
}

export default Status;
