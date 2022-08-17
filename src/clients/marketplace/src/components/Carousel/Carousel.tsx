import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

const Carousel = (props: { slides: Array<{ url: string; title: string }> }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  } as React.CSSProperties;

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${props.slides[currentIndex]?.url})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#FFF",
    zIndex: 1,
    cursor: "pointer",
  } as React.CSSProperties;

  const dotsContainerStyles = { display: "flex", justifyContent: "center" };
  const dotsStyles = { magin: "0 3px", cursor: "pointer", fontSize: "20px" };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#FFF",
    zIndex: 1,
    cursor: "pointer",
  } as React.CSSProperties;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === props.slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        <AiOutlineArrowLeft />
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        <AiOutlineArrowRight />
      </div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {props.slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotsStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            <BsDot />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
