import React from "react";

export default function BannerSection() {
  return (
    <>
      <div className="banner">
        <div className="container1">
          <div className="slider-container1 has-scrollbar">
            <div className="slider-item">
              <img
                src="../../../public/images/electronics/hotdeal.png"
                alt="women's latest fashion sale"
                className="banner-img img-fluid"
              />
              <div className="banner-content">
                <p className="banner-subtitle">Trending Electronics</p>
                <h2 className="banner-title">Modern Software</h2>
                <p className="banner-text">
                  starting at ₹ <b>1299</b>.00
                </p>
                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>
            <div className="slider-item">
              <img
                src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="modern sunglasses"
                className="banner-img"
              />
              <div className="banner-content">
                <p className="banner-subtitle">Trending Eleectronics</p>
                <h2 className="banner-title">Modern Software</h2>
                <p className="banner-text">
                  starting at ₹ <b>15</b>.00
                </p>
                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>
            <div className="slider-item">
              <img
                src="../../../public/images/electronics/hotdeal.png"
                alt="new fashion summer sale"
                className="banner-img"
              />
              <div className="banner-content">
                <p className="banner-subtitle">Trending Electronics</p>
                <h2 className="banner-title">Modern Software</h2>
                <p className="banner-text">
                  starting at ₹ <b>29</b>.99
                </p>
                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
