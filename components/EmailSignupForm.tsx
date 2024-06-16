import React from "react";
import { EmailForm } from "./elements/EmailForm";


const EmailSignupForm = () => {
  return (
    <section className="w-full  bg-emerald-800 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-start h-full">
        <h2 className="px-3 text-4xl font-bold text-yellow-50">
          Get my best tips in your inbox
        </h2>
        <div className="w-full px-3 py-3">
          <EmailForm />
        </div>
      </div>
    </section>
  );
};

export default EmailSignupForm;
