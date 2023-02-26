import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts } from "../store/Product/productActions.js";
import BannerSection from "../sections/Home Section/BannerSection.jsx";
import ProductSlider from "../components/Product List/ProductList.jsx";
import ProductCardTwo from "../components/Product Cards/ProductCardTwo.jsx";

export default function AllProductsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const products = useSelector((state) => state?.products?.products);
  return (
    <>
      <main>
        <BannerSection />
        <div className="container">
          <h4 className="text-muted text-uppercase bg-light text-center py-3 rounded fs-5 mx-5">
            All Products
          </h4>
        </div>
        <div className="container mb-3 pb-3">
          <hr className="text-muted fw-bold" />
          <div className="row bg-light rounded">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {
                products?.data?.map((product) => (
                  <ProductCardTwo product={product} key={product.id} />
                ))
              }
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
