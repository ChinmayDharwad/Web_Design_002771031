import React from 'react'
import { useState } from "react";
import "./imageSlider.css"

    const ImageSlider = ({ slides }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        console.log(currentIndex);
        const goToPrevious = () => {
          const isFirstSlide = currentIndex === 0;
          const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
          setCurrentIndex(newIndex);
        };
        const goToNext = () => {
          const isLastSlide = currentIndex === slides.length - 1;
          const newIndex = isLastSlide ? 0 : currentIndex + 1;
          setCurrentIndex(newIndex);
        };
        const goToSlide = (slideIndex) => {
          setCurrentIndex(slideIndex);
        };
    

  return (
    <div className='sliderStyles'>
      <div className='sliderDiv'>
        <div onClick={() =>goToPrevious()} className="leftArrowStyles">
          ❰
        </div>
        <div className='slideStylesWidthBackground'>
        <img src = {slides[currentIndex].url} height = "500px" width = "900px"></img>
      </div>
        <div onClick={() =>goToNext()} className="rightArrowStyles">
          ❱
        </div>
      </div>
     
      {/* <div className='dotsContainerStyles'>
        {slides.map((slide, slideIndex) => (
          <div
            className='dotStyle'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div> */}
    </div>
  )
}


export default ImageSlider