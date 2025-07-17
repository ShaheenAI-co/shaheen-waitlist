import React from "react";
import Form from "./Form";

const FormCard = () => {
  return (
    <div className="max-w-[586px] bg-white/10 backdrop-blur-3xl rounded-4xl p-8 border border-white/20 shadow-2xl  mx-auto flex flex-col gap-7">
      <div className="flex flex-col gap-3 items-start">
        <h2 className="text-white text-base font-semibold ">
          Join the waitlist
        </h2>
        <p className="text-white/70 text-base text-left ">
          Get early access to AI-generated content and automated scheduling before
          anyone else
        </p>
      </div>

      <Form />
    </div>
  );
};

export default FormCard;
