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
      toast.error("Please fill in all fields");
      return;
    }

    // Success message


    // Reset form
    setEmail("");
    setPhone("");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-4">
      {/* Email Input */}
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 h-12"
        required
      />

      {/* Phone Input */}
      <input
        type="tel"
        placeholder="Phone No"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 h-12"
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-white text-black hover:bg-gray-100 font-semibold h-12 text-base"
      >
        Join waitlist
      </button>
    </form>
  );
};

export default Form;
