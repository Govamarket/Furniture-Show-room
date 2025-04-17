import React, { useState } from "react";
import Pedetail from "./../../Asset/pdetail.png";
import Prdetail from "./../../Asset/prdetail.png";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Tab Menu */}
      <div className="flex gap-8 border-b mb-6">
        {["description", "additional", "reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 border-b-2 transition-all duration-300 ${
              activeTab === tab
                ? "border-black font-semibold"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab === "description"
              ? "Description"
              : tab === "additional"
              ? "Additional Information"
              : "Reviews [5]"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-gray-700 text-sm leading-relaxed space-y-4">
        {activeTab === "description" && (
          <>
            <p>
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
            </p>
            <p>
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>

            {/* Product Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <img
                src={Prdetail}
                alt="sofa-1"
                className="rounded-xl object-cover w-full"
              />
              <img
                src={Pedetail}
                alt="sofa-2"
                className="rounded-xl object-cover w-full"
              />
            </div>
          </>
        )}

        {activeTab === "additional" && (
          <p>More technical specs and product properties go here.</p>
        )}

        {activeTab === "reviews" && (
          <p>Display user reviews and a review submission form here.</p>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
