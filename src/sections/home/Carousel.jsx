import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import image1 from "../../images/Bihar-Kushal-Yuva-Program.webp";
import image2 from "../../images/bimar-aaksmik-fasal-yojna0.webp";
import image3 from "../../images/village.png";
import "./Carousel.css";

const data = [
  {
    src: image1,
    alt: "Image 1 for carousel",
  },
  {
    src: image2,
    alt: "Image 2 for carousel",
  },
  {
    src: image3,
    alt: "Image 3 for carousel",
  },
];

export const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change 3000 to the desired interval in milliseconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
