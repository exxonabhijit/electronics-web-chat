import React from "react";
import "./PostCard.css";
import { useSelector } from "react-redux";
import { uploadFile } from "../../store/FileUpload/fileActions.js";
import { useDispatch } from "react-redux";

export default function PostCard() {
  const { userDetail } = useSelector((state) => state.auth);

  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const today = `${day} ${month}.${year}`;

  const fileUploader = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    useDispatch(uploadFile(formData));
  };

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
                {userDetail ? userDetail.name : "Hey user"},{" "}
                <span className="date-title">{today}</span>
              </p>
            </div>
            <div className="edit-section"></div>
          </div>
          {/* <div className="d-flex"> */}
          {/* <input type="text" placeholder='Whats in your mind, Dipesh' className='caption mt-1'/> */}
          <form>
            <textarea
              className="form-control w-100 bg-light"
              placeholder={`What's on your mind ${
                userDetail ? userDetail.name : "Hey user"
              } ?`}
              id="floatingTextarea2"
              style={{ height: 100 }}
              defaultValue={""}
            />
            {/* </div> */}
            <hr />
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 ">
                {/* <button className='btn d-flex justify-content-center'><img src="../../../public/images/icons/photos-10602.svg" alt="" className='upload me-2' /><span>PHOTOS</span></button> */}
                <input
                  type="file"
                  className="custom-file-input mb-2"
                  onChange={fileUploader}
                />
              </div>
              <div className="col-md-4 col-12 col-lg-4 col-sm-4">
                <button className="btn-standard me-3">POST</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
