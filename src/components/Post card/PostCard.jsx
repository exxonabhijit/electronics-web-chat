import React from "react";
import "./PostCard.css";

export default function PostCard() {
  return (
    <>
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
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
          {/* <div className="d-flex"> */}
            {/* <input type="text" placeholder='Whats in your mind, Dipesh' className='caption mt-1'/> */}
              <textarea
                className="form-control w-100 bg-light"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: 100}}
                defaultValue={""}
              />
          {/* </div> */}
          <hr />
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 ">
              {/* <button className='btn d-flex justify-content-center'><img src="../../../public/images/icons/photos-10602.svg" alt="" className='upload me-2' /><span>PHOTOS</span></button> */}
              <input type="file" className="custom-file-input" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
