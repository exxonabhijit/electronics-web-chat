import React from "react";
import { Link } from "react-router-dom";

export default function ProductCardTwo() {
  return (
    <>
      <Link to={`/product/${1}`}>
        <div className="card shadow-sm border-0 h-100 mx-2">
          <h5>
            <span className="badge bg-success text-uppercase m-2 p-2">
              In Stock
            </span>
          </h5>
          <img
            src="../../public/images/products/clothes-1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="card-text">
              <p className="text-muted">Price: 300 ₹</p>
            </div>
          </div>
          <button className="btn-standard text-uppercase">private chat</button>
        </div>
      </Link>
    </>
  );
}
