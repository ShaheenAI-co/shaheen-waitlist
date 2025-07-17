import React from "react";
import Form from "./Form";

const FormCard = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl max-w-md mx-auto">
      <h2 className="text-white text-xl font-semibold mb-2">
        Join the waitlist
      </h2>
      <p className="text-white/70 text-sm mb-6">
        Get early access to AI-generated content and automated scheduling before
        anyone else
      </p>

      <Form />
    </div>
  );
};

export default FormCard;
