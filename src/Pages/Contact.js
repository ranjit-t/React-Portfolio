import React from "react";
import LineGradient from "../Components/LineGradient";

export default function Contact() {
  return (
    <div id="contact" className="h-screen">
      <div className=" w-full flex align-middle justify-center mb-10 mt-16">
        <p className="font-playfair font-semibold text-4xl mb-5">
          <span className="text-red">CO</span>NTACT
          <LineGradient width="w-60 mt-0" />
        </p>
      </div>
    </div>
  );
}
