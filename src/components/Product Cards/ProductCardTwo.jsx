import React from "react";
import { Link } from "react-router-dom";

const handleOpenWhatsApp = () => {
  const phoneNumber = '9167365416'; // Replace with the phone number you want to send a message to
  window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
};

export default function ProductCardTwo({ product }) {
  console.log("====================================");
  console.log("exxon product", product.id);
  console.log("====================================");
  return (
    <>
      <Link to={`/product/${product.id}`}>
        <div className="card shadow-sm border-0 h-100 mx-2">
          <h5>
            <span className="badge bg-success text-uppercase m-2 p-2">
              In Stock {product?.is_available}
            </span>
          </h5>
          <img
            src="https://www.xboom.in/wp-content/uploads/2022/11/Apple-MLQ93HN-A-SmartPhones-491997706-i-1-1200Wx1200H.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <div className="card-text">
              <p className="text-muted">Price: ₹ {product.price}</p>
            </div>
          </div>
          <button className="btn-standard text-uppercase" onClick={handleOpenWhatsApp}>private chat</button>
        </div>
      </Link>
    </>
  );
}
