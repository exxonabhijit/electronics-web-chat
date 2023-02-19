import React from "react";
import ProductCard from "../../components/Product Cards/ProductCardTwo";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../../store/Product/productActions.js";
import { useEffect } from "react";

//! import fetchAllProduct action from productActions

export default function ProductList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts()); //! dispatch fetchAllProducts action
  }, []);

  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
      <Slider {...settings} className="mt-5">
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
      <div className="d-flex justify-content-center mt-3 mb-4">
        <div className="col-12 col-lg-5 col-sm-12 col-md-4"></div>
        <div className="col-12 col-lg-2 col-sm-12 col-md-4">
          <Link to="/all_products" className="fw-bold text-danger text-center">
            See All
          </Link>
        </div>
        <div className="col-12 col-lg-5 col-sm-12 col-md-4"></div>
      </div>
    </>
  );
}
