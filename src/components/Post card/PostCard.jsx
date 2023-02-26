import React from "react";
import "./PostCard.css";
import { uploadFile } from "../../store/FileUpload/fileActions.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../store/Posts/postsActions.js";

const schema = yup.object().shape({
  text: yup.string().required("This filed is required"),
});

export default function PostCard() {
  const { userDetail } = useSelector((state) => state.auth);
  const id = useSelector((state) => state?.file?.file?.data?.id);

  const dispacth = useDispatch();

  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const today = `${day} ${month}.${year}`;

  const fileUploader = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    dispacth(uploadFile(formData));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (formValue) => {
    const { text } = formValue;
    const data = {
      description: text,
      images: [id],
    };

    dispacth(createPost(data));
    reset();
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
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <textarea
              className="form-control w-100 bg-light"
              placeholder={`What's on your mind ${
                userDetail ? userDetail.name : "Hey user"
              } ?`}
              id="floatingTextarea2"
              style={{ height: 100 }}
              {...register("text")}
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
