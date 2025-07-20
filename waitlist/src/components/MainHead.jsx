import React from "react";
import { getTranslations } from "next-intl/server";

const MainHead = async () => {
  const HeadingTrans =  await  getTranslations("Heading");
  const logo = await  getTranslations("Logo");
  return (
    <div className="   flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl  satoshi-bold text-white mb-6 md:leading-tight ">
         {HeadingTrans("title")}{" "}
        <span className="max-sm:hidden">
          <br />
        </span>
        {/* let <span className="italic gradText">{logo("name")} </span> handle it
        all */}
        {HeadingTrans("title2")}
      </h1>

      <p className="text-white max-sm:w-[80vw] text-base md:text-xl mb-12 max-w-xl mx-auto">
        {HeadingTrans("subhead")}
      </p>
    </div>
  );
};

export default MainHead;
