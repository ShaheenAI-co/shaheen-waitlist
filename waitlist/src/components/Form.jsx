"use client";

import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !phone) {
      console.log("Please fill in all fields");
      return;
    }

    // Success message

    // Reset form
    setEmail("");
    setPhone("");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-4">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2 items-start">
          <label
            htmlFor="email"
            className="text-white flex gap-2 font-semibold text-sm"
          >
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/20 border-1 outline-none text-sm focus:border-[#A46EDB] focus:border-2 border-[#898989] text-white px-4 placeholder:text-[#C5C2C2]  h-12 rounded-xl w-full"
            required
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <label
            htmlFor="phone"
            className="text-white flex gap-2 font-semibold text-sm"
          >
            Phone No <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="+966"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-white/20 border-1 text-sm outline-none focus:border-[#A46EDB] focus:border-2 border-[#898989] text-white px-4 placeholder:text-[#C5C2C2]  h-12 rounded-xl w-full"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-white cursor-pointer text-black hover:bg-white/75 transition-all duration-300 font-semibold h-12 text-base rounded-xl outline-black"
      >
        Join waitlist
      </button>
    </form>
  );
};

export default Form;
