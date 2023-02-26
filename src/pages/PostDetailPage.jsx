import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommentCard from "../components/Details Pages/CommentCard";
import axios from "axios";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createComment } from "../store/Posts/postsActions";

const date = (created_at) => {
  return moment(created_at).format("MMMM Do YYYY, h:mm:ss a");
};

const schema = yup.object().shape({
  text: yup.string().required("This filed is required"),
});

export default function PostDetailPage() {
  const navigate = useNavigate(); //For back button
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts/${id}`)
      .then((res) => {
        setPost(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  //! Comment task completed
  const handleComment = (formValue) => {
    const { text } = formValue;
    let data = {
      comment: text,
      id: id,
    };
    dispatch(createComment(data));
    reset();
  };

  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <button
            className="mb-3 text-start fw-bold text-muted"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <div className="d-flex flex-start align-items-center">
            <img
              className="rounded-circle shadow-1-strong me-3"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
              alt="avatar"
              width={40}
              height={40}
            />
            <div>
              <h6 className="fw-bold text-danger mb-1">{post?.user?.name}</h6>
              <p className="text-muted small mb-0">{date(post?.created_at)}</p>
            </div>
          </div>
          <p className="mt-3 mb-4 pb-2 text-muted fw-bold">
            {post?.description}
          </p>
          <img
          src={post?.images?.[0]}
            className="post-image img-fluid"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
          <div className="small d-flex justify-content-between mt-3">
            <div className="btn-action d-flex">
              <a href="#!" className="d-flex align-items-center me-3">
                <i className="far fa-thumbs-up me-2" />
                <p className="mb-0">Like</p>
              </a>
              <a href="#!" className="d-flex align-items-center me-3">
                <i className="far fa-comment-dots me-2" />
                <p className="mb-0">Comment</p>
              </a>
            </div>
            <a href="#!" className="d-flex align-items-center me-3">
              <i className="fas fa-share me-2" />
              <p className="mb-0">Private Chat</p>
            </a>
          </div>
          <div className="px-3 py-2 border-0">
            <div className="d-flex flex-start w-100">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                alt="avatar"
                width={40}
                height={40}
              />
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
                    <button className="btn-standard">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h4 className="text-muted fw-normal fs-4 mb-3">Comments</h4>
          <hr />
          <div className="row">
            {post?.comments?.map((comment) => (
              <CommentCard comment={comment} key={comment.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
