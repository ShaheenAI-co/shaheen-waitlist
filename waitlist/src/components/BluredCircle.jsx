import React from "react";

const BluredCircle = () => {
  return (
    <div className="absolute max-sm:top-[-20vw] top-[-1100px] left-1/2 z-0 max-sm:w-[90vw] max-sm:h-[90vw] max-sm:max-w-[100vw] max-sm:max-h-[100vw] w-[1750px] h-[1750px] transform -translate-x-1/2">
      <div className="w-full h-full circleGradient rounded-full"></div>
    </div>
  );
};

export default BluredCircle;
