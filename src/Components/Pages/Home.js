import React from "react";
import "./Home.css";
// import Asset from "./../../Asset/hero-section/scandinavian-interior-mockup-wall-decal-background 1.png";

const Home = () => {
  return (
    <div className=" container">
      <div className="content max-w-md h-1/2  absolute right-5 top-40 text-white rounded-xl text-x p-4">
        <div>
          <section className="text-black font-semibold text-x">
            <p>New Arrival</p>
          </section>
          <section className="text-h font-extrabold text-4xl">
            {" "}
            <h1>
              Discover Our <br></br> New Collection
            </h1>
          </section>
          <section className="text-black">
            {" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </section>{" "}
          <button
            type="button"
            className="button rounded-xl flex justify-center items-center text-center"
          >
            <p>Buy Now</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
