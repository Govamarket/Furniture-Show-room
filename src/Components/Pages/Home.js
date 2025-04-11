import React from "react";
import "./Home.css";
import diningTable from "./../../Asset/dining.png";
import livingIcon from "./../../Asset/living.png";
import bedRoom from "./../../Asset/bedroom.png";
import tableBar from "./../../Asset/solfd.png";
import sofaBar from "./../../Asset/sodp.png";
import washBase from "./../../Asset/wasd.png";
import bedTap from "./../../Asset/bed.png";
import bigSofa from "./../../Asset/sospa.png";
import palorSofa from "./../../Asset/sopls.png";
import latternLap from "./../../Asset/lap.png";
import brownSofa from "./../../Asset/sof.png";
import roomSofa from "./../../Asset/solf.png";

const Home = () => {
  return (
    <div>
      <div className=" container">
        <div className="content max-w-md   absolute right-1 top-37 text-white rounded-xl text-x p-4 h-auto">
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

      <section className="our-product ">
        <div className="text-center mt-5 font-extrabold text-2xl p-5">
          <span>Our Product</span>
        </div>
        <section className="flex justify-evenly gap-x-1 gap-y-3 md: flex-wrap">
          <div className="relative">
            <img src={tableBar} className="rounded-lg" />
            <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10">
              <p>-30</p>
            </span>
            <span>
              <p>Syltherine</p>
            </span>

            <span className="text-sm">
              <p>Stylish cafe chair</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 2.500.000</p>
                </button>
              </span>
              <span className="text-sm line-through">
                {" "}
                <p>Rp 3.500.000</p>
              </span>
            </div>
          </div>
          <div className="relative  opacity-50">
            <img src={sofaBar} className="rounded-lg" />
            <div className="absolute top-20 text-center mx-20">
              <span className="add p-2 text-white font-bold rounded">
                <button>Add to cart</button>
              </span>
              <span className="flex mt-4 text-black font-serif gap-1">
                <p>share</p>
                <p>Compare</p>
                <p>Like</p>
              </span>
            </div>
            <span className="text-black font-bold">
              <p>Leviosa</p>
            </span>
            <span className="text-black text-sm">
              <p>Stylish cafe chair</p>
            </span>
            <span className="font-bold">
              <button>
                {" "}
                <p>Rp 2.500.000</p>
              </button>
            </span>
          </div>

          <div>
            <div className="relative">
              <img src={washBase} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10">
                <p>-50</p>
              </span>
            </div>

            <button>
              <p>Lolito</p>
            </button>
            <span className="text-sm">
              <p>Luxury big sofa</p>
            </span>

            <div className="flex gap-2">
              <span className="font-bold">
                <button>
                  {" "}
                  <p>Rp 7.000.000</p>
                </button>
              </span>
              <span className="text-sm line-through">
                <p>Rp 14.000.000</p>
              </span>
            </div>
          </div>

          <div>
            <div className="relative">
              <img src={roomSofa} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-green-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10">
                <p>New</p>
              </span>
            </div>

            <span>
              <p>Respira</p>
            </span>

            <span className="text-sm">
              <p>Outdoor bar table and stool</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 2.500.000</p>
                </button>
              </span>
              <span className="line-through">
                {" "}
                <p>Rp 3.500.000</p>
              </span>
            </div>
          </div>
          <div>
            <img src={bigSofa} className="rounded-lg" />
            <span className="font-bold">
              <p>Grifo</p>
            </span>

            <span className="text-sm">
              <p>Night Lamp</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 1.500.000</p>
                </button>
              </span>
            </div>
          </div>

          <div>
            <div className="relative">
              <img src={palorSofa} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-green-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10">
                <p>New</p>
              </span>
            </div>

            <span className="font-bold">
              <p>Muggo</p>
            </span>

            <span className="text-sm">
              <p>Small mug</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 150.000</p>
                </button>
              </span>
            </div>
          </div>

          <div>
            <div className="relative">
              <img src={latternLap} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10">
                <p>-50</p>
              </span>
            </div>
            <span className="font-bold">
              <p>Pinky</p>
            </span>

            <span className="text-sm">
              <p>Cute bed set</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 7.000.000</p>
                </button>
              </span>
              <span className="text-sm line-through">
                {" "}
                <p>Rp 14.000.000</p>
              </span>
            </div>
          </div>

          <div>
            <div className="relative">
              <img src={brownSofa} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-green-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10">
                <p>New</p>
              </span>
            </div>
            <span className="font-bold">
              <p>Potty</p>
            </span>

            <span className="text-sm">
              <p>Minimalist flower pot</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 2.500.000</p>
                </button>
              </span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
