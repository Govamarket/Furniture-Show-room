import React from "react";
import "./Home.css";
import diningTable from "./../../Asset/dining.png";
import livingIcon from "./../../Asset/living.png";
import bedRoom from "./../../Asset/bedroom.png";
import tableBar from "./../../Asset/solfd.png";
import sofaBar from "./../../Asset/sodp.png";

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

      <section className="our-product ">
        <div className="text-center mt-5 font-extrabold p-5">
          <span>Our Product</span>
        </div>
        <section className="flex justify-evenly">
          <div>
            <img src={tableBar} />
            <span>
              <p>Syltherine</p>
            </span>
            <span>
              <p>Stylish cafe chair</p>
            </span>
            <span>
              <p>Rp 2.500.000</p>
              <p>Rp 3.500.000</p>
            </span>
          </div>
          <div className="relative  opacity-50">
            <img src={sofaBar} />
            <div className="absolute top-10 text-center mx-20">
              <span className="add p-2 text-white font-bold rounded">
                <button>Add to cart</button>
              </span>
              <span className="flex mt-4 text-white gap-1">
                <p>share</p>
                <p>Compare</p>
                <p>Like</p>
              </span>
              <span className="text-white">
                <p>Leviosa</p>
              </span>
              <span>
                <p>Stylish cafe chair</p>
              </span>
              <span className="font-bold">
                <p>Rp 2.500.000</p>
              </span>
            </div>
          </div>
          <div>
            <span>
              <p></p>
            </span>
            <span>
              <p></p>
            </span>
          </div>
          <div>
            <span>
              <p></p>
            </span>
            <span>
              <p></p>
            </span>
          </div>
          <div>
            <span>
              <p></p>
            </span>
            <span>
              <p></p>
            </span>
          </div>
          <div>
            <span>
              <p></p>
            </span>
            <span>
              <p></p>
            </span>
          </div>
          <div>
            <span>
              <p></p>
            </span>
            <span>
              <p></p>
            </span>
          </div>
          <div>
            <span>
              <p></p>
            </span>
            <span>
              <p></p>
            </span>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
