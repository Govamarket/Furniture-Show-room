import { Trophy, ShieldCheck, Truck, Headphones } from "lucide-react"; // Icons
import React from "react";

const InfoBanner = () => {
  const features = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "High Quality",
      subtitle: "crafted from top materials",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Warranty Protection",
      subtitle: "Over 2 years",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      subtitle: "Order over 150 $",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24 / 7 Support",
      subtitle: "Dedicated support",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-10 py-6 px-4 bg-amber-50 border border-dashed border-blue-200">
      {features.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="text-black">{item.icon}</div>
          <div className="text-sm font-bold mt-2">{item.title}</div>
          <div className="text-xs text-gray-500">{item.subtitle}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoBanner;
