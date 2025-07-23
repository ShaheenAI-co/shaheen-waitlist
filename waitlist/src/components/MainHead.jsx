'use client'
import React from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const MainHead =  () => {
  const HeadingTrans =    useTranslations("Heading");
  const logo =   useTranslations("Logo");

  const pathname = usePathname(); // give you the url path
  const locale = pathname.split("/")[1] || "en"; // check the first part after /
  const isArabic = locale === "ar";
  return (
    <div className="   flex flex-col items-center justify-center">
      <h1 className={`text-3xl md:text-5xl  satoshi-bold text-white mb-6 md:leading-tight ${isArabic ? "alexandria-font" : "satoshi-bold"}`}>
         {HeadingTrans("title")}{" "}
        <span className="max-sm:hidden">
          <br />
        </span>
        {/* let <span className="italic gradText">{logo("name")} </span> handle it
        all */}
        {HeadingTrans("title2")}
      </h1>

      <p className="text-white max-sm:w-[80vw]  text-base md:text-xl mb-12 max-w-xl mx-auto">
        {HeadingTrans("subhead")}
      </p>
    </div>
  );
};

export default MainHead;
