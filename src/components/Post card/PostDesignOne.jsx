import React from "react";
import { Link } from "react-router-dom";
export default function PostDesignOne({ Post }) {
  const handleOpenWhatsApp = () => {
    const phoneNumber = '9167365416'; // Replace with the phone number you want to send a message to
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
  };
  console.log("====================================");
  console.log("Single Post Title", Post.title, "Single Post ID", Post.id);
  console.log("====================================");
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
              <h6 className="fw-bold text-danger mb-1">Lily Coleman</h6>
              <p className="text-muted small mb-0">
                Shared publicly - Jan 2020
              </p>
            </div>
          </div>
          {/* </Link> */}
          <Link to={`/post/${Post.id}`}>
          <p className="mt-3 mb-4 pb-2 text-muted lead">{Post.title}</p>
            <img
              src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="post-image img-fluid"
              alt=""
            />
          </Link>
          <div className="small d-flex justify-content-between mt-3">
            <div className="btn-action d-flex">
              <a href="#!" className="d-flex align-items-center me-3">
                <i className="far fa-thumbs-up me-2" />
                <p className="mb-0">Like</p>
              </a>
              <a href="#!" className="d-flex align-items-center me-3">
                <i className="far fa-comment-dots me-2" />
                <p className="mb-0">Comments</p>
              </a>
            </div>
            <a href="#!" className="d-flex align-items-center me-3">
              <i className="fas fa-share me-2" />
              <p className="mb-0" onClick={handleOpenWhatsApp}>Private Chat</p>
            </a>
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
              <textarea
                className="form-control w-100 bg-light"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: 100 }}
                defaultValue={""}
              />
            </div>
          </div>
          <div className="float-end mt-2 pt-1 d-flex">
            <button className="btn-standard">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
