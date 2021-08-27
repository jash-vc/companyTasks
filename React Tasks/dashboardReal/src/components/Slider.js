import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SliderImage from "../assets/images/slider.jpg";
  

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  return (
    <Slider {...settings} className="sliderContainer">
      <div className="imgSliderWrapper">
        <img src={SliderImage} alt="slider" />
      </div>
      <div className="imgSliderWrapper">
        <img src={SliderImage} alt="slider" />
      </div>
      <div className="imgSliderWrapper">
        <img src={SliderImage} alt="slider" />
      </div>
      <div className="imgSliderWrapper">
        <img src={SliderImage} alt="slider" />
      </div>
      <div className="imgSliderWrapper">
        <img src={SliderImage} alt="slider" />
      </div>
      <div className="imgSliderWrapper">
        <img src={SliderImage} alt="slider" />
      </div>
      <div className="imgSliderWrapper">
        <img src={SliderImage} alt="slider" />
      </div>
    </Slider>
  );
}