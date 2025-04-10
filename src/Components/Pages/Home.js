import React from "react";
import "./Home.css";
import diningTable from "./../../Asset/dining.png";
import livingIcon from "./../../Asset/living.png";
import bedRoom from "./../../Asset/bedroom.png";
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
        <section className="flex justify-center p-10">
          <span className="text-center font-extrabold text-lg">
            <h1>Browse The Range</h1>
            <span className="font-normal">
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </span>
          </span>
        </section>
        <section className="flex justify-center gap-3 overflow-auto md: flex-wrap">
          <div className="text-center font-bold">
            <img src={diningTable} className="w-50" />
            <span>
              <p>Dining</p>
            </span>
          </div>

          <div className="text-center font-bold">
            <img src={livingIcon} className="w-50" />
            <span>living</span>
          </div>

          <div className="text-center font-bold">
            <img src={bedRoom} className="w-50" />
            <span>
              <p>Bedroom</p>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
