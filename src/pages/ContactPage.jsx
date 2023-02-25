import React from "react";

export default function ContactPage() {
  return (
    <>
      <div className="container mb-5">
        <div className="row my-4">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="card border border-0 m-2 h-100 shadow rounded align-middle">
              <div className="card-body align-content-center">
                <img
                  src="../../public/images/icons/pin-48.svg"
                  className="mx-auto d-block mb-2 img-fluid"
                  alt=""
                  style={{ width: 80, height: 80 }}
                />
                <h5 className="card-title text-muted text-center">Address</h5>
                <p className="text-muted fs-5 text-center fw-normal my-3">
                  At.govathane,Post.Aware,Uran, raigad mhatre
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="card border border-0 m-2 h-100 shadow rounded align-middle">
              <div className="card-body">
                <img
                  src="../../public/images/icons/mail-2569.svg"
                  className="mx-auto d-block mb-2 img-fluid"
                  alt=""
                  style={{ width: 80, height: 80 }}
                />
                <h5 className="card-title text-muted text-center">
                  Email Address
                </h5>
                <p className="text-muted fs-5 text-center fw-normal my-3">
                  samyakking@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="card border border-0 m-2 h-100 shadow rounded align-middle">
              <div className="card-body">
                <img
                  src="../../public/images/icons/customer-service-1675.svg"
                  className="mx-auto d-block mb-2 img-fluid"
                  alt=""
                  style={{ width: 80, height: 80 }}
                />
                <h5 className="card-title text-muted text-center">Phone</h5>
                <p className="text-muted fs-5 text-center fw-normal my-3">
                  +91-9167365416
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light mt-5">
        <div className="row py-5">
          <h3 className="text-muted text-center py-3">Get In Touch</h3>
          <div className="d-flex align-items-center justify-content-center">
            <div className="col-lg-4 col-12 col-sm-12 col-md-8">
              <div className="card p-5 border-0 shadow-sm">
                <div className="card-body">
                  {/* ##### FORM START ##### */}
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label text-muted fw-normal"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        aria-describedby="emailHelp"
                        className="form-control border-0 bg-light my-2"
                      />
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label text-muted fw-normal"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        aria-describedby="emailHelp"
                        className="form-control border-0 bg-light my-2"
                      />
                      <label htmlFor="exampleTextArea" className="form-label text-muted fw-normal">
                        Message
                      </label>
                      <textarea
                        className="form-control border-0 bg-light my-2"
                        id="exampleTextArea"
                        rows="3"
                      ></textarea>
                    </div>
                    <button className="btn-standard text-uppercase my-3">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
