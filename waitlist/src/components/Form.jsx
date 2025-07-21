"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const Form = () => {
  const pathname = usePathname(); // give you the url path
  const locale = pathname.split("/")[1] || "en"; // check the first part after /
  const isArabic = locale === "ar";

  const formLabel = useTranslations("FormInput");
  const formBtn = useTranslations("FormBtn");
  const inputPlace = useTranslations("FormPlaceholder");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+966");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!phone) {
      setError("phone is required");
      return;
    }

    const { error } = await supabase
      .from("waiting_list")
      .insert({ email, phone });

    if (error) {
      setError(error.message);
      setSuccess(false);
      return;
    }
    // Combine country code and phone number
    const fullPhone = `${countryCode}${phone}`;
    setPhone(fullPhone);

    // Success message
    setSuccess(true);
    setError("");

    // Reset form
    setEmail("");
    setPhone("");
    setCountryCode(countryCode);
  };

  // Reset success when user edits the form
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setSuccess(false);
  };

  // Hide confirmation message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className={`flex flex-col gap-2 items-start `}>
          <label
            htmlFor="email"
            className={`text-white flex gap-2 font-semibold md:text-base text-sm ${
              isArabic ? "flex-row-reverse self-end" : ""
            }`}
          >
            {formLabel("Email")}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder={inputPlace("Email")}
            value={email}
            onChange={handleInputChange(setEmail)}
            className={`bg-white/20 border-1 outline-none md:text-base text-base focus:border-[#A46EDB] focus:border-2 border-[#898989] text-white px-4 placeholder:text-[#C5C2C2]  py-2 rounded-xl w-full ${
              isArabic ? "text-right" : ""
            }`}
            required
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <label
            htmlFor="email"
            className={`text-white flex gap-2 font-semibold md:text-base text-sm ${
              isArabic ? "flex-row-reverse self-end" : ""
            }`}
          >
            {formLabel("Phone")}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex w-full  ">
            <select
              id="country-code"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="bg-white/20 border-1 outline-none md:text-base text-base focus:border-[#A46EDB]  focus:border-2 border-[#898989] text-white px-4 placeholder:text-[#C5C2C2]  py-2 country-code-selector rounded-l-md rounded-r-none"
            >
              <option className="country-option" value="+966">
                🇸🇦 +966
              </option>
              <option className="country-option" value="+973">
                🇧🇭 +973
              </option>
              <option className="country-option" value="+965">
                🇰🇼 +965
              </option>
              <option className="country-option" value="+974">
                🇶🇦 +974
              </option>
              <option className="country-option" value="+971">
                🇦🇪 +971
              </option>
              <option className="country-option" value="">
                🏳️ Other
              </option>
            </select>
            <input
              className={`bg-white/20 border-1 outline-none md:text-base text-base  focus:border-2 border-[#898989] w-full text-white px-4 placeholder:text-[#C5C2C2] focus:border-[#A46EDB] py-2  phone-input  rounded-l-none rounded-r-md  ${
                isArabic ? "text-right" : ""
              }`}
              type="tel"
              id="phone"
              placeholder={inputPlace("Phone")}
              required
              value={phone}
              onChange={handleInputChange(setPhone)}
            />
          </div>
        </div>
      </div>

      {success && (
        <div className="text-green-500 text-center ">
          Successfully submitted!
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-white cursor-pointer text-black hover:bg-white/75 transition-all duration-300 font-semibold py-4 md:text-lg capitalize text-base rounded-xl outline-black"
      >
        {formBtn("title")}
      </button>
      {console.log(phone)}
    </form>
  );
};

export default Form;
