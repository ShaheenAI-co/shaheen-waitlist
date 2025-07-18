import React from "react";
import Form from "./Form";


const FormCard = () => {
  return (
    <div className=" md:w-[586px]  w-90 bg-white/10 backdrop-blur-3xl rounded-4xl md:p-8 p-5 border border-white/20 shadow-2xl  mx-auto flex flex-col gap-5">
      <div className="flex flex-col gap-3 items-start">
        <h2 className="text-white md:text-lg text-base font-semibold ">
          Join the waitlist
        </h2>
        <p className="text-white/70 md:text-base text-sm text-left ">
          Get early access to AI-generated content and automated scheduling
          before anyone else
        </p>
      </div>

      <Form />
    </div>
  );
};

export default FormCard;
