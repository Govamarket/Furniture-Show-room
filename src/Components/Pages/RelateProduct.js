import React from "react";
import OurProduct from "./OurProduct";
// import { useLocation } from "react-router-dom";

const RelateProduct = () => {
  return (
    <div>
      <section className="Product text-center font-extrabold items-center">
        <span>{/* <h1>Related Products</h1> */}</span>
      </section>
      <div>
        <OurProduct />
      </div>
    </div>
  );
};

export default RelateProduct;
