import React from "react";

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-6 col-xl-6 p-2">
            <img
              src="../../public/images/electronics/computer-g8d93e9bab_640.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
            <h2 className="text-muted text-uppercase p-2 fw-bold">
              who we are
            </h2>
            <p className="text-muted fw-light mt-2 fs-5 p-2 align-items-center">
              At [Company Name], we're passionate about [describe what your
              company does or what sets you apart]. Our goal is to provide
              [target audience] with [unique selling proposition]. Whether
              you're looking for [list your products/services], or just want to
              [describe a problem your customers may face that your company
              solves], we're here to help
            </p>
            <p className="text-muted mt-2 fs-5 p-2 align-items-center fw-light">
              Our mission at [Company Name] is to [describe your mission and
              what you hope to achieve]. We believe in [core values or beliefs
              that guide your company]. We strive to [what you do to fulfill
              your mission].
            </p>
          </div>
        </div>
      </div>

      <div className="bg-light">
        <div className="container mt-5 py-5">
          <div className="row text-center">
            <h2 className="text-muted text-uppercase p-2 fw-bold my-2">
              why choose us
            </h2>
            <p className="text-muted mt-2 fs-5 p-2 align-items-center fw-light">
              At [Company Name], we're committed to providing our customers with
              the highest quality products and services. We carefully select
              each product and service we offer, ensuring that it meets our
              strict standards for quality and performance. You can trust us to
              provide you with the best products and services available.
            </p>
          </div>
          <div className="row my-4">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="card border border-0 m-2 h-100">
                <div className="card-body">
                  <img
                    src="../../public/images/icons/fast-food-delivery-bike-12992 (2).svg"
                    className="mx-auto d-block mb-2 img-fluid"
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                  <h5 className="card-title text-muted text-center">
                    Free Delivery Worldwide
                  </h5>
                  <p className="text-muted fs-5 text-center fw-normal my-3">
                    Get free delivery on all orders with our new delivery
                    service.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="card border border-0 m-2 h-100">
                <div className="card-body">
                  <img
                    src="../../public/images/icons/box-9156.svg"
                    className="mx-auto d-block mb-2 img-fluid"
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                  <h5 className="card-title text-muted text-center">
                    30 Days Return
                  </h5>
                  <p className="text-muted fs-5 text-center fw-normal my-3">
                    Enjoy hassle-free shopping with our 30-day return policy -
                    your satisfaction is our top priority!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="card border border-0 m-2 h-100">
                <div className="card-body">
                  <img
                    src="../../public/images/icons/customer-service-1675.svg"
                    className="mx-auto d-block mb-2 img-fluid"
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                  <h5 className="card-title text-muted text-center">
                    27/4 Support
                  </h5>
                  <p className="text-muted fs-5 text-center fw-normal my-3">
                    Get support and assistance round the clock with our 24/7
                    service feature
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
