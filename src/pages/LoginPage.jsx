import React from "react";

export default function LoginPage() {
  return (
    <>
      <div className="wrapper">
        <div className="container main">
          <div className="row">
            <div className="col-md-6 side-image">
              {/* <!-- Image --> */}
              <img src="" alt="" />
              <div className="text">
                <p>Join the community of developers</p>
              </div>
            </div>
            <div className="col-md-6 right">
                <div className="input-box">
                    <header>Create Account</header>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="input" id="email" required autoComplete="off"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Password</label>
                        <input type="password" className="input" id="password" required autoComplete="off"/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
