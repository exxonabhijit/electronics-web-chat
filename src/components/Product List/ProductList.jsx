import React, { createRef } from "react";
import ProductCard from "../../components/Product Cards/ProductCardTwo";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../../store/Product/productActions.js";
import { useEffect } from "react";

export default function ProductList({ show }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts()); //! dispatch fetchAllProducts action
  }, []);

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  const customeSlider = createRef();

  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    dots: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="d-flex justify-content-end my-3">
        <div className="col-12 col-lg-5 col-sm-12 col-md-4"></div>
        <div className="col-12 col-lg-5 col-sm-12 col-md-4"></div>
        <div className="col-12 col-lg-2 col-sm-12 col-md-4 d-flex">
          <button onClick={() => gotoPrev()} className="btn-standard m-2">
            -
          </button>
          <button onClick={() => gotoNext()} className="btn-standard m-2">
            +
          </button>
        </div>
      </div>
      <Slider {...settings} className="mt-5" ref={customeSlider}>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
      </Slider>
      {show ? (
        <>
          <div className="d-flex justify-content-center mt-5 mb-4">
            <div className="col-12 col-lg-5 col-sm-12 col-md-4"></div>
            <div className="col-12 col-lg-2 col-sm-12 col-md-4">
              <Link
                to="/all_products"
                className="fw-bold text-danger text-center"
              >
                See All Products
              </Link>
            </div>
            <div className="col-12 col-lg-5 col-sm-12 col-md-4"></div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
