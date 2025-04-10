import React from "react";
import "./Home.css";
import dinNer from "./../../Asset/mskk.png";
import newImage from "./../../Asset/roomI.png";

const Home = () => {
  return (
    <div>
      <div className=" container">
        <div className="content max-w-md   absolute right-5 top-40 text-white rounded-xl text-x p-4 h-auto">
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
            <section className="text-black text-sm mt-6">
              {" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </section>{" "}
            <button
              type="button"
              className="button rounded-xl flex justify-center items-center text-center p-5 mt-10"
            >
              <p>Buy Now</p>
            </button>
          </div>
        </div>
      </div>

      <div>
        <section>
          <span>
            <h1>Browse The Range</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </span>
        </section>
        <section>
          <img src={dinNer} />
          <img src={newImage} />
        </section>
      </div>
    </div>
  );
};

export default Home;
