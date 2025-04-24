import React from "react";
import "./Home.css";
import diningTable from "./../../Asset/dining.png";
import livingIcon from "./../../Asset/living.png";
import bedRoom from "./../../Asset/bedroom.png";
import OurProduct from "../Products/OurProduct";
import Room from "./Room";
import FuniroFurniture from "./FuniroFurniture";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className=" container">
        <div className="content max-w-md   absolute right-1 top-40 text-white rounded-xl text-x p-4 h-auto">
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
            <div className="pt-2 mt-5">
              <button
                type="button"
                className="button rounded-xl flex justify-center items-center pt-1 p-1 w-40 h-14"
              >
                <Link to="/shop">
                  {" "}
                  <p>Buy Now</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section className="flex justify-center p-10">
          <div className="block">
            <span className="text-center font-extrabold text-2xl">
              <h1>Browse The Range</h1>
            </span>
            <span className="font-normal flex justify-center text-center items-center">
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </span>
          </div>
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

      <section>
        <OurProduct />
      </section>

      <section>
        <Room />
      </section>

      {/* Content of beautiful  rooms inspiration */}

      <section>
        <FuniroFurniture />
      </section>
    </div>
  );
};

export default Home;
