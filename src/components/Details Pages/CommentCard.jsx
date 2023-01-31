import React from "react";

export default function CommentCard() {
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
            <h6 className="fw-bold text-danger mb-1">Rahul Mhatre</h6>
            <p className="text-muted small mb-0">Shared publicly - Jan 2020</p>
          </div>
        </div>
        <p className="text-muted fw-bold mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima et
          laudantium optio eaque. Saepe! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Soluta ipsum sint accusantium iusto necessitatibus
          praesentium voluptatibus cupiditate nobis est tempore?
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
              <h6 className="fw-bold text-danger mb-1">
                Pandhari Sheth Phadke
              </h6>
              <p className="text-muted small mb-0">
                Shared publicly - Jan 2020
              </p>
            </div>
          </div>
          <p className="text-muted fw-bold mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi architecto eaque exercitationem dolore.
          </p>
        </div>
        <hr />
      </div>
    </>
  );
}
