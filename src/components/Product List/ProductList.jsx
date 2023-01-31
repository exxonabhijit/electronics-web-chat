import React from "react";
import ProductCard from "../../components/Product Cards/ProductCard";

export default function ProductList() {
  return (
    <>
      <div className="product-grid mb-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}
