import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createComment } from "../../store/Posts/postsActions.js";
import { useDispatch } from "react-redux";
import moment from "moment";

const date = (created_at) => {
  return moment(created_at).format("MMMM Do YYYY, h:mm:ss a");
};

const schema = yup.object().shape({
  text: yup.string().required("This filed is required"),
});

export default function PostDesignOne({ Post }) {
  const dispatch = useDispatch();
  //! Whatsapp task completed
  const handleOpenWhatsApp = () => {
    const phoneNumber = "9167365416";
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, "_blank");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  //! Comment task completed
  const handleComment = (formValue) => {
    const { text } = formValue;
    let data = {
      comment: text,
      id: Post.id,
    };
    dispatch(createComment(data));
    reset();
  };

  return (
    <>
      <div className="card border-0 shadow-sm mb-3">
        <div className="card-body">
          {/* <Link to="/profile"> */}
          <div className="d-flex flex-start align-items-center">
            <img
              className="rounded-circle shadow-1-strong me-3"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
              alt="avatar"
              width={60}
              height={60}
            />
            <div>
              <h6 className="fw-bold text-danger mb-1">{Post.user.name}</h6>
              <p className="text-muted small mb-0">{date(Post?.created_at)}</p>
            </div>
          </div>
          {/* </Link> */}
          <Link to={`/post/${Post.id}`}>
            <p className="mt-3 mb-4 pb-2 text-muted lead">{Post.description}</p>
            {Post.images.length > 0 ? (
              <img
                src={Post?.images[0].url}
                className="post-image img-fluid"
                alt=""
              />
            ) : (
              ""
            )}
          </Link>
          <div className="small d-flex justify-content-between mt-3">
            <div className="btn-action d-flex">
              <a href="#" className="mb-0 me-3 cursor-pointer hoverable">
                {Post.like}Like
              </a>
              <Link to={`/post/${Post.id}`} className="mb-0">
                Comments
              </Link>
            </div>
            <div className="d-flex align-items-center me-3">
              <a href="#" className="mb-0" onClick={handleOpenWhatsApp}>
                Private Chat
              </a>
            </div>
          </div>
        </div>
        <div className="px-3 py-2 border-0">
          <div className="d-flex flex-start w-100">
            <Link to="/profile">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                alt="avatar"
                width={40}
                height={40}
              />
            </Link>
            <div className="form-outline w-100">
              {/* <textarea className="form-control" id="textAreaExample" rows={4} style={{background: '#fff'}} defaultValue={"Comment"} /> */}
              <form onSubmit={handleSubmit(handleComment)}>
                <textarea
                  className="form-control w-100 bg-light"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: 100 }}
                  {...register("text")}
                />
                <div className="float-end mt-2 pt-1 d-flex">
                  <button className="btn-standard" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
