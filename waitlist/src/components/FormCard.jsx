'use client'
import React from "react";
import Form from "./Form";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";


const FormCard =  () => {

  const pathname = usePathname(); // give you the url path
  const locale = pathname.split("/")[1] || "en"; // check the first part after /
  const isArabic = locale === "ar";

  const f = useTranslations("FormHeading")
  return (
    <div className=" md:w-[586px]  w-90 bg-white/10 backdrop-blur-3xl rounded-4xl md:p-8 p-5 border border-white/20 shadow-2xl  mx-auto flex flex-col gap-5">

      <div className={`flex flex-col gap-3   ${
              isArabic ? "items-end" : "items-start"
            }`}>
        <h2 className="text-white md:text-lg text-base font-semibold ">
          {f("title")}
        </h2>
        <p className="text-white/70 md:text-base text-sm text-left ">
        {f("description")}
        </p>
      </div>

      <Form />
    </div>
  );
};

export default FormCard;
