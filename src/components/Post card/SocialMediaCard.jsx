import React from "react";
import "./SociaCard.css";

export default function SocialMediaCard() {
  return (
    <>
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="profile-section d-flex">
              <img
                src="../../../public/images/icons/user-3296.svg"
                alt=""
                className="rounded-circle profile me-2 img-fluid"
              />
              <p className="text-muted fw-bold fs-6 pt-3">
                Abhijit Mhatre, <span className="date-title">25 May.1999</span>
              </p>
            </div>
            <div className="edit-section"></div>
          </div>
          <div className="post-section mt-2 h-auto w-100 mb-3">
            <p className="text-muted">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              magnam. Blanditiis iure praesentium, reiciendis consectetur
              necessitatibus rerum amet rem expedita, unde, ullam fugiat. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Nemo, magnam.
              Blanditiis iure praesentium, reiciendis consectetur necessitatibus
              rerum amet rem expedita, unde, ullam fugiat.
            </p>
            <img
              src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="post-image img-fluid"
              alt=""
            />
          </div>
          <hr />
          <div className="row d-flex text-center justify-content-between">
            <div className="col-lg-3 col-sm-12 col-12 me-1">
              <button className="text-center button-action like-btn">
                <i className="fa-solid fa-thumbs-up"></i>
                LIKE
              </button>
            </div>
            <div className="col-lg-3 col-sm-12 col-12 me-1">
              <button className="text-center button-action cmt-btn">
              <i class="bi bi-heart-fill"></i>
                COMMENTS
              </button>
            </div>
            <div className="col-lg-3 col-sm-12 col-12 me-1">
              <button className="button-action pernl-cht d-flex ps-5">
                <img src="../../../public/images/icons/comments.svg"  alt=""/>
                <span className="fs-6 ps-3 text-center">CHAT</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
