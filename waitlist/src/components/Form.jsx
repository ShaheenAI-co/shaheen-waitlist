"use client";

import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+966");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !phone) {
      console.log("Please fill in all fields");
      return;
    }

    // Combine country code and phone number
    const fullPhone = `${countryCode}${phone}`;
    setPhone(fullPhone);

    // Success message

    // Reset form
    setEmail("");
    setPhone("");
    setCountryCode("+966");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 items-start">
          <label
            htmlFor="email"
            className="text-white flex gap-2 font-semibold md:text-base text-sm"
          >
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/20 border-1 outline-none md:text-base text-sm focus:border-[#A46EDB] focus:border-2 border-[#898989] text-white px-4 placeholder:text-[#C5C2C2]  h-12 rounded-xl w-full"
            required
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <label
            htmlFor=""
            className="text-white flex gap-2 font-semibold md:text-base text-sm"
          >
            Phone No <span className="text-red-500">*</span>
          </label>
          <div className="flex w-full  ">
            <select
              id="country-code"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="bg-white/20 border-1 outline-none md:text-base text-sm  focus:border-2 border-[#898989] text-white px-4 placeholder:text-[#C5C2C2]  h-12 country-code-selector rounded-l-md rounded-r-none"
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
              <option className="country-option" value="+">
                🏳️ Other
              </option>
            </select>
            <input
              className="bg-white/20 border-1 outline-none md:text-base text-sm  focus:border-2 border-[#898989] flex-1 text-white px-4 placeholder:text-[#C5C2C2]  h-12 phone-input w-64 rounded-l-none rounded-r-md"
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-white cursor-pointer text-black hover:bg-white/75 transition-all duration-300 font-semibold h-12 md:text-base text-sm rounded-xl outline-black"
      >
        Join waitlist
      </button>
      {console.log(phone)}
    </form>
  );
};

export default Form;
