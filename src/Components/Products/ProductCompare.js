import React from "react";
import ProductImg from "./../../Asset/productc.png";
import logoManu from "./../../Asset/MeuLogos.png";
import CenterSofa from "./../../Asset/center.png";
// import BlackSofa from "./../../Asset/inlinef.png";

const ProductComparison = () => {
  const productItems = [
    {
      imgs: <img src={CenterSofa} />,
      text: "Asgaard Sofa",
      price: "Rs. 250,000.00",
    },

    {
      imgs: <img src={CenterSofa} />,
      text: "Asgaard Sofa",
      price: "Rs. 250,000.00",
    },
  ];
  return (
    <div>
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(
        ${ProductImg}
        )`,
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-70 flex flex-col justify-center items-center">
          {/* Logo or Icon */}
          <div className="mb-2">
            <img src={logoManu} />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-semibold text-black">
            Product Comparison
          </h1>

          {/* Breadcrumb */}
          <div className="mt-2 text-sm text-gray-700">
            <span className="font-semibold">Home</span>
            <span className="mx-1">›</span>
            <span>Comparison</span>
          </div>
        </div>
      </div>
      <section>
        {productItems.map((item, index) => (
          <div key={index} className="flex justify-between">
            <div className="size-60">{item.imgs}</div>
            <div>{item.text}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductComparison;
