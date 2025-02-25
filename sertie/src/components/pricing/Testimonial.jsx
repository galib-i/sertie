import React from 'react';

export default function Testimonial() {
  const QUOTE_ICON_FILTER = "invert(50%) sepia(7%) saturate(102%) hue-rotate(87deg) brightness(90%) contrast(86%)";

  return (
    <div className="relative">
      <img
        src="src/assets/images/quote-left.svg"
        alt="Quote left icon"
        width={80}
        height={100}
        className="absolute top-[-35px] left-[calc(50%-325px)] transform z-10 opacity-20 select-none pointer-events-none"
        style={{ filter: QUOTE_ICON_FILTER }}
      />
      <blockquote className="text-xl max-w-2xl mx-auto italic">
        "Applicants who made use of Sertie's insights and upskilling recommendations had a 
        <strong className="normal text-sertie-blue-500 text-2xl"> 50% higher </strong> 
        success rate in landing a project"
        <footer className="normal text-sm text-sertie-black/75">
          Kyle Tan, CEO at Headstart Global
        </footer>
      </blockquote>
    </div>
  );
}
