import React from "react";
import Marquee from "react-fast-marquee";

export const InfiniteMarquee = () => {
  const images = [
    { src: "binance.png" },
    { src: "LI.png" },
    { src: "discover.png" },
    { src: "utopia.png" },
  ];

  return (
    <div className="social-proof-section flex flex-col justify-center items-center py-8">
      <span className="text-lg social-proof-text mb-8">
        We have experience working with top companies and startups
      </span>
      <Marquee autofill={true} speed={150}>
        {images.map((image, index) => (
            <img key={index} src={image.src} className="mr-4 social-proof-image" />
        ))}
      </Marquee>
    </div>
  );
};
