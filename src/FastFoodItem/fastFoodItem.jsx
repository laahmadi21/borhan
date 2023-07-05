import { HiShoppingCart } from "react-icons/hi";
import "./fastFoodItem.css";
import { useState, useEffect } from "react";
import Loading from "../Loading/loading";

const FastFoodItem = ({ name, price, ingredients, imageUrl, dely }) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div
      className="card product-card h-100 border-0 pb-1 shadow-sm fade-in-horiz"
      style={{ animationDelay: dely + "s" }}
    >
      <span className="badge badge-end badge-shadow bg-success fs-md fw-medium">
        قیمت : {price.toLocaleString()} تومان
      </span>
      {imageLoading ? <div className="card__placeholder"></div> : ""}
      <img
        className="card-img-top"
        src={imageUrl}
        style={imageLoading ? { display: "none" } : { display: "block" }}
        onLoad={() => setImageLoading(false)}
      />
      <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
        <h5 className="mb-2">{name}</h5>
        <div className="fs-md fw-bold text-muted mb-3">{ingredients}</div>
        <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
          <HiShoppingCart className="fs-5 ms-3" />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};
export default FastFoodItem;
