import React from "react";
import Slider from "react-slick";
import ProductCard from "../Product Cards/ProductCard";

export default function ProductSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <>
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
        </Slider>
      </div>
    </>
  );
}
