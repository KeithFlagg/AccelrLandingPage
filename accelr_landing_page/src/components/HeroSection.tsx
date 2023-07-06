import React from "react";

export const HeroSection = () => {
  return (
    <div className="hero-section mt-16">
      <img className="hero-image" src="bgimg.png" />
      <div className="hero-overlay-text">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <span className="font-bold text-4xl text-center">
            Design and Development to help your startup{" "}
            <span className="hero-inner-highlight">ship products, fast</span>
          </span>
          <span className="text-center font-regular text-lg hero-subtext mt-4">
            Accelr is a subscription-based design and development agency for
            startups. Request unlimited features for your website or application
            for a flat monthly fee. Pause or cancel your subscription anytime.
          </span>
          <div className="mt-4 mb-20">
            <button className="hero-btn text-white py-1.5 px-5 md:ml-8 md:static">
              Book a Call With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
