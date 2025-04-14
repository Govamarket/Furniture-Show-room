import React from "react";
import { useLocation } from "react-router-dom";
import tableBar from "./../../Asset/solfd.png";
import sofaBar from "./../../Asset/sodp.png";
import washBase from "./../../Asset/wasd.png";
import bigSofa from "./../../Asset/sospa.png";
import palorSofa from "./../../Asset/sopls.png";
import latternLap from "./../../Asset/lap.png";
import brownSofa from "./../../Asset/sof.png";
import roomSofa from "./../../Asset/solf.png";

const OurProduct = () => {
  const location = useLocation();

  // console.log(location, "========LOCATION=======-");
  return (
    <div>
      <section className="our-product ">
        {location.pathname === "/shop" ? (
          ""
        ) : (
          <div className="text-center mt-5 font-extrabold text-2xl p-5">
            <span>Our Product</span>
          </div>
        )}

        <section className="flex justify-evenly gap-x-1 gap-y-3 md: flex-wrap">
          <div className="relative bg-gray-50 rounded-lg">
            <img src={tableBar} className="rounded-lg" />
            <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10 text-sm">
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

          <div className="add-cart relative  bg-gray-50 rounded-lg">
            <img src={sofaBar} className="rounded-lg" />
            <div className="absolute top-20 text-center mx-20">
              <span className="add p-2 text-white font-bold rounded">
                <button>Add to cart</button>
              </span>
              <span className="flex mt-4 text-white font-serif gap-1">
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

          <div className=" bg-gray-50 rounded-lg">
            <div className="relative">
              <img src={washBase} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10 text-sm">
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

          <div className=" bg-gray-50 rounded-lg">
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

          <div className=" bg-gray-50 rounded-lg">
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

          <div className=" bg-gray-50 rounded-lg">
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

          <div className=" bg-gray-50 rounded-lg">
            <div className="relative">
              <img src={latternLap} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10 text-sm">
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
              <span className="text-sm line-through text-gray-500">
                {" "}
                <p>Rp 14.000.000</p>
              </span>
            </div>
          </div>

          <div className=" bg-gray-50 rounded-lg">
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

      {/* Show more button */}
      <section className="flex justify-center items-center mt-3 p-3">
        {location.pathname === "/shop" ? (
          ""
        ) : (
          <button className="show-room font-bold border-2 pt-2 p-2 w-40">
            Show More
          </button>
        )}
      </section>
    </div>
  );
};

export default OurProduct;
