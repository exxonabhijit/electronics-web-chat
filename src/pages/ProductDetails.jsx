import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();

  // const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/product/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log("product data", product?.variants[0]?.images[0]?.url);

  return (
    <>
      <div className="container">
        <div className="row mt-4 h-100">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
            <img
              src={product?.variants[0]?.images?.[0]?.url}
              className="img-fluid"
              alt="product"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
            <h3>{product.name}</h3>
            <p className="text-muted fw-normal fs-4">{product.description}</p>
            <h4 className="text-muted">
              <span className="fw-bold">PRICE: ₹{product.price}.00</span>
              <br />
              {product?.is_available == 1 ? (
                <span className="badge bg-success text-uppercase m-2 p-2">
                  In Stock
                </span>
              ) : (
                <span className="badge bg-danger text-uppercase m-2 p-2">
                  Out of Stock
                </span>
              )}
            </h4>
            <button className="btn-standard fw-bold py-3 mt-3">
              PRIVATE CHAT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
