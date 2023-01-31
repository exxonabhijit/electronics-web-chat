import React from "react";

export default function ProductCard() {
  return (
    <>
        <div className="showcase">
          <div className="showcase-banner">
            <img
              src="../../../public/images/electronics/product01.png"
              alt="Mens Winter Leathers Jackets"
              width={300}
              className="product-img default"
            />
            <img
              src="../../../public/images/electronics/product02.png"
              alt="Mens Winter Leathers Jackets"
              width={300}
              className="product-img hover"
            />
            <p className="showcase-badge">15%</p>
          </div>
          <div className="showcase-content">
            <a href="#" className="showcase-category">
              jacket
            </a>
            <a href="#">
              <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
            </a>
            <div className="showcase-rating">
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star-outline" />
              <ion-icon name="star-outline" />
            </div>
            <div className="price-box">
              <p className="price">$48.00</p>
              <del>$75.00</del>
            </div>
          </div>
        </div>
    </>
  );
}
