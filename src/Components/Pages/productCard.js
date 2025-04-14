import React from "react";

const ProductCard = ({
  img,
  name,
  description,
  discount,
  price,
  hasDiscount,
}) => {
  return (
    <div className="relative bg-gray-50 rounded-lg">
      <img src={img} className="rounded-lg" />
      {hasDiscount === true ? (
        <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10 text-xs">
          <p>-30</p>
        </span>
      ) : null}

      <span>
        <p>{name}</p>
      </span>

      <span className="text-sm">
        <p>{description}</p>
      </span>
      <div className="flex gap-1">
        <span>
          <button className="font-bold">
            <p>{price}</p>
          </button>
        </span>
        <span className="text-sm line-through">
          {" "}
          <p>{discount}</p>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
