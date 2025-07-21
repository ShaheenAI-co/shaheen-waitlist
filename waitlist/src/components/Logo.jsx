"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Logo = () => {
  const t = useTranslations("Logo");
  const pathname = usePathname(); // give you the url path
  const locale = pathname.split("/")[1] || "en"; // check the first part after / 
  const isArabic = locale === "ar";
  return (
    <header className={`px-6 py-3 z-10 flex  items-center justify-center gap-2 ${
      isArabic ? "flex-row-reverse alexandria-font" : ""
    } `}>
      <Image src="/Logo/logo-light.png" alt="Logo" width={20} height={20} />
      <h1 className="text-white md:text-xl  text-base satoshi-bold">
        {t("name")}
      </h1>
    </header>
  );
};

export default Logo;
