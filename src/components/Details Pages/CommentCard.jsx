import React from "react";
import moment from "moment";

const date = (created_at) => {
  return moment(created_at).format("MMMM Do YYYY, h:mm:ss a");
};

export default function CommentCard({ comment }) {
  
  return (
    <>
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
            <h6 className="fw-bold text-danger mb-1">{comment?.user.name}</h6>
            <p className="text-muted small mb-0">
              Shared publicly - {date(comment?.created_at)}
            </p>
          </div>
        </div>
        <p className="text-muted fw-bold mt-3">{comment?.comment}</p>
        <div className="small d-flex justify-content-between mt-3">
          <div className="btn-action d-flex">
            <a href="#!" className="d-flex align-items-center">
              <i className="far fa-thumbs-up me-2" />
              <p className="mb-0">Reply</p>
            </a>
          </div>
        </div>
        <div className="reply-comment ps-5 mt-3">
          {comment?.replies?.map((reply) => {
            return (
              <>
                <div className="d-flex flex-start align-items-center" key={reply?.id}>
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                  <div>
                    <h6 className="fw-bold text-danger mb-1">
                      {reply?.user?.name}
                    </h6>
                    <p className="text-muted small mb-0">
                      Shared publicly - {date(reply?.created_at)}
                    </p>
                  </div>
                </div>
                <p className="text-muted fw-bold mt-3">{reply?.comment}</p>
              </>
            );
          })}
        </div>
        <hr />
      </div>
    </>
  );
}
