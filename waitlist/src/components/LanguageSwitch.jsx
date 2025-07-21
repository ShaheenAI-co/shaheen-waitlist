"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const LanguageSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Extract the locale from the pathname
  const initialLocale = pathname.split("/")[1] || "en";
  const [currentLang, setCurrentLang] = useState(initialLocale);

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    setCurrentLang(nextLocale);
    router.replace(`/${nextLocale}`);
  };

  //  update state if the route changes outside of this component
  useEffect(() => {
    const locale = pathname.split("/")[1] || "en";
    setCurrentLang(locale);
  }, [pathname]);

  return (
    <div>
      <select
        className="px-1 py-2 rounded-md outline-none focus:outline-none  "
        id="lang"
        onChange={onSelectChange}
        value={currentLang}
      >
        <option value="en">Eng</option>
        <option value="ar">Ar</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;
