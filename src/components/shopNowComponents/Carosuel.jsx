import React, { useState, useEffect } from "react";

const Carousel = ({ interval = 3000 }) => {
  const images = [
    "/assets/miragobeauty.png",
    "/assets/aloevera.png",
    "/assets/product3.png",
    "/assets/product4.png",
  ];

  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, interval);

    return () => clearInterval(timer); 
  }, [length, interval]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="flex-none w-full">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-56 md:h-96 object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((element, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={index === current}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
