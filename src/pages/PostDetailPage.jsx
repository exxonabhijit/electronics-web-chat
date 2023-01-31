import React from "react";
import CommentCard from "../components/Details Pages/CommentCard";

export default function PostDetailPage() {
  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <button className="btn btn-transparent mb-3 text-start fw-bold text-muted">
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
              <h6 className="fw-bold text-danger mb-1">Lily Coleman</h6>
              <p className="text-muted small mb-0">
                Shared publicly - Jan 2020
              </p>
            </div>
          </div>
          <p className="mt-3 mb-4 pb-2 text-muted fw-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip consequat.
          </p>
          <img
            src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="post-image img-fluid"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="row mt-5">
          <h4 className="text-muted fw-normal fs-4 mb-3">Comments</h4>
          <hr />
          <div className="row">
            <CommentCard />
            <div className="comment-body mb-4">
              <div className="d-flex flex-start align-items-center">
                <img
                  className="rounded-circle shadow-1-strong me-3"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                  alt="avatar"
                  width={40}
                  height={40}
                />
                <div>
                  <h6 className="fw-bold text-danger mb-1">Rahul Mhatre</h6>
                  <p className="text-muted small mb-0">
                    Shared publicly - Jan 2020
                  </p>
                </div>
              </div>
              <p className="text-muted fw-bold mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                et laudantium optio eaque. Saepe! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Soluta ipsum sint accusantium
                iusto necessitatibus praesentium voluptatibus cupiditate nobis
                est tempore?
              </p>
              <div className="reply-comment ps-5 mt-3">
                <div className="d-flex flex-start align-items-center">
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                  <div>
                    <h6 className="fw-bold text-danger mb-1">Pandhari Sheth Phadke</h6>
                    <p className="text-muted small mb-0">
                      Shared publicly - Jan 2020
                    </p>
                  </div>
                </div>
                <p className="text-muted fw-bold mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto eaque exercitationem dolore.</p>
              </div>
              <hr />
            </div>
            <div className="comment-body mb-4">
              <div className="d-flex flex-start align-items-center">
                <img
                  className="rounded-circle shadow-1-strong me-3"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                  alt="avatar"
                  width={40}
                  height={40}
                />
                <div>
                  <h6 className="fw-bold text-danger mb-1">Samyak Thali</h6>
                  <p className="text-muted small mb-0">
                    Shared publicly - Jan 2020
                  </p>
                </div>
              </div>
              <p className="text-muted fw-bold mt-3">
                Pappanna sangty satish che kad paise taka t aaikat ny 🤧🤧🤧🤧.
              </p>
              <hr />
            </div>
            <div className="comment-body mb-4">
              <div className="d-flex flex-start align-items-center">
                <img
                  className="rounded-circle shadow-1-strong me-3"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                  alt="avatar"
                  width={40}
                  height={40}
                />
                <div>
                  <h6 className="fw-bold text-danger mb-1">Abhijit Mhatre</h6>
                  <p className="text-muted small mb-0">
                    Shared publicly - Jan 2020
                  </p>
                </div>
              </div>
              <p className="text-muted fw-bold mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. est
                tempore?
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
