import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/Product/productActions";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const  product  = useSelector((state) => state?.product);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  console.log("====================================");
  console.log("product", product);
  console.log("====================================");

  return (
    <>
      <div className="container">
        <div className="row mt-4 h-100">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="img-fluid"
              alt="product"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
            <h3>Product Name</h3>
            <p className="text-muted fw-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos dolorem impedit odio ab, maxime, architecto officia
              hic sequi, ad minus voluptatem? Nobis laboriosam nulla cupiditate
              totam optio inventore perspiciatis amet! Neque hic aperiam
              laudantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Dignissimos dolorem impedit odio ab, maxime,
              architecto officia hic sequi, ad minus voluptatem? Nobis
              laboriosam nulla cupiditate totam optio inventore perspiciatis
              amet! Neque hic aperiam laudantium.
            </p>
            <h4 className="text-muted">
              <span className="fw-bold">PRICE: ₹100.00</span>
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
