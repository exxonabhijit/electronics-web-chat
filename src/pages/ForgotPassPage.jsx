import React from "react";

export default function ForgotPassPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <div className="col-lg-4 col-12 col-sm-12 col-md-8">
              <div className="card p-5 border-0 shadow-sm">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label text-muted fw-normal"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        aria-describedby="emailHelp"
                        className="form-control border-0 bg-light"
                      />
                      <div id="emailHelp" className="form-text text-danger">
                        Invalid username
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label text-muted fw-normal"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control border-0 bg-light"
                        id="exampleInputPassword1"
                        aria-describedby="passwordHelp"
                      />
                      <div id="passwordHelp" className="form-text text-danger">
                        Invalid Password
                      </div>
                    </div>
                    <div className="mb-3">
                      <Link
                        to="/sign_up"
                        className="text-start text-muted fw-normal"
                      >
                        Forgot Password ?
                      </Link>
                    </div>
                    <button type="submit" className="btn-standard ">
                      Login
                    </button>
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
