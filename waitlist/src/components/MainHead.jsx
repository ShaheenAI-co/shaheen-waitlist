import React from "react";

const MainHead = () => {
  return (
    <div className="   flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl lg:text-7xl satoshi-bold text-white mb-6 md:leading-tight ">
        Say goodbye to social media stress {" "}
        <span className="max-sm:hidden">
          <br />
        </span>
        let <span className="italic gradText">ShaheenAI </span> handle it all
      </h1>

      <p className="text-white max-sm:w-[80vw] text-base md:text-xl mb-12 max-w-xl mx-auto">
        AI that creates and schedules engaging posts for you
      </p>
    </div>
  );
};

export default MainHead;
