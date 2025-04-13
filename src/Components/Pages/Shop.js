import React from "react";
import "./Shop.css";
import { FaGreaterThan } from "react-icons/fa6";

const Shop = () => {
  return (
    <div className="container">
      {/* <section></section> */}
      <section className="pt-10 leading-10">
        <div className="flex justify-center items-center font-extrabold">
          <h1>Shop</h1>
        </div>
        <div className="flex justify-center items-center">
          {/* Link  route */}
          <span>Home</span>
          <span>
            <FaGreaterThan />
          </span>
          <span>
            {/* Link route */}
            <p>Shop</p>
          </span>
        </div>
      </section>

      <section>
        <div></div>
      </section>
    </div>
  );
};

export default Shop;
