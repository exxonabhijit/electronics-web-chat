import React from "react";

export default function BestSellerSidebar() {
  return (
    <>
      <div className="product-showcase">
        <h3 className="showcase-heading">best sellers</h3>
        <div className="showcase-wrapper">
          <div className="showcase-container1">
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="../../../public/images/electronics/product01.png"
                  alt="baby fabric shoes"
                  width={75}
                  height={75}
                  className="showcase-img"
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Apple MacBook Pro M1</h4>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <div className="price-box">
                  <del>$5.00</del>
                  <p className="price">$4.00</p>
                </div>
              </div>
            </div>
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="../../../public/images/electronics/product02.png"
                  alt="men's hoodies t-shirt"
                  className="showcase-img"
                  width={75}
                  height={75}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">HP Laptop</h4>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star-half-outline" />
                </div>
                <div className="price-box">
                  <del>$17.00</del>
                  <p className="price">$7.00</p>
                </div>
              </div>
            </div>
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="../../../public/images/electronics/product04.png"
                  alt="girls t-shirt"
                  className="showcase-img"
                  width={75}
                  height={75}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Dell Laptop</h4>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star-half-outline" />
                </div>
                <div className="price-box">
                  <del>$5.00</del>
                  <p className="price">$3.00</p>
                </div>
              </div>
            </div>
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="../../../public/images/electronics/product06.png"
                  alt="woolen hat for men"
                  className="showcase-img"
                  width={75}
                  height={75}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Iphone 13 pro</h4>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <div className="price-box">
                  <del>$15.00</del>
                  <p className="price">$12.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
