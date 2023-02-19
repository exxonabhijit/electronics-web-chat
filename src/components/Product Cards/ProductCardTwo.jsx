import React from "react";
import { Link } from "react-router-dom";

export default function ProductCardTwo() {
  return (
    <>
    <Link to={`/product/${1}`}>
      <div className="card shadow-sm border-0 m-3">
        <img src="../../../public/images/products/2.jpg" className="card-img-top img-fluid h-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </Link>
    </>
  );
}
