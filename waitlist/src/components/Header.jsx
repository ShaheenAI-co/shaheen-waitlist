"use client";
import React from "react";
import Logo from "./Logo";
import LanguageSwitch from "./LanguageSwitch";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname(); // give you the url path
  const locale = pathname.split("/")[1] || "en"; // check the first part after / 
  const isArabic = locale === "ar";
  return (
    <div
      className={`w-full z-10 flex p-4 md:px-8 md:py-4 justify-between items-center ${
        isArabic ? "flex-row-reverse" : ""
      }`}
    >
      <Logo />
      <LanguageSwitch />
    </div>
  );
};

export default Header;
