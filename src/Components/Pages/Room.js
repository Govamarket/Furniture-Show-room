import React from "react";
import { motion } from "framer-motion";
import frameImage from "./../../Asset/mskk.png";
import dinerChair from "./../../Asset/anglr.png";
import angleLine from "./../../Asset/anle.png";

const Room = () => {
  return (
    <div className="bg-[#f8f6ee] py-16 px-6 flex flex-col md:flex-row items-start gap-8">
      {/* Left Side */}
      <div className="md:w-1/3 space-y-6 flex-shrink-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-600">
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you.
        </p>
        <button className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition duration-300">
          Explore More
        </button>
      </div>

      {/* Right Side - Scrollable on Mobile */}
      <motion.div
        className="product w-full md:flex-1 overflow-x-auto flex gap-4 scrollbar-hide"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Cards wrapper for proper layout on desktop */}
        <div className="flex gap-4 min-w-max md:min-w-0">
          {/* Card 1 */}
          <div className="min-w-[250px] bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={frameImage}
              alt="Inner Peace Room"
              className="h-56 w-full object-cover"
            />
            <div className="p-4 space-y-1">
              <p className="text-sm text-gray-500">01 — Bed Room</p>
              <h3 className="text-xl font-semibold">Inner Peace</h3>
              <button className="mt-2 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                +
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[250px] bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={dinerChair}
              alt="Bright Dining"
              className="h-56 w-full object-cover"
            />
            <div className="p-4 space-y-1">
              <p className="text-sm text-gray-500">02 — Dining Room</p>
              <h3 className="text-xl font-semibold">Bright Dining</h3>
              <button className="mt-2 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                +
              </button>
            </div>
          </div>

          {/* Angle Line */}
          <div className="p-4 space-y-1">
            <img src={angleLine} alt="Arrow" className="rounded-md" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Room;
