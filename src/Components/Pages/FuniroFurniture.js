import React from "react";
import Desk from "./../../Asset/desk.png";
import Chair from "./../../Asset/deie.png";
import Spac from "./../../Asset/spac.png";
import Flask from "./../../Asset/flask.png";
import Kit from "./../../Asset/kit.png";
import Pic from "./../../Asset/pic.png";
const FuniroFurniture = () => {
  return (
    <div className="min-h-4-screen bg-white flex items-center justify-center p-4 mb-10">
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="text-lg">
              <p> Share your setup with</p>
            </span>{" "}
            <span className="text-gray-600">#FuniroFurniture</span>
          </h1>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-4 gap-2">
          {/* First Row */}
          <div className="col-span-1">
            <img
              src={Spac}
              alt="Desk setup"
              className="object-cover rounded-lg w-full h-auto"
            />
          </div>
          <div className="col-span-2">
            <img
              src={Desk}
              alt="Dining area"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src={Spac}
              alt="Bedroom"
              className="h-auto object-cover rounded-lg"
            />
          </div>

          {/* Second Row */}
          <div className="col-span-1">
            <img
              src={Chair}
              alt="Chair"
              className="h-auto object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src={Flask}
              alt="Table decor"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src={Kit}
              alt="Wall decor"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src={Pic}
              alt="Kitchen"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuniroFurniture;
