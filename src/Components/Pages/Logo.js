import React from "react";
import LogoImg from "./../../Asset/logo.png";

const Logo = () => {
  return (
    <div>
      <span>
        <img src={LogoImg} className="w-20"></img>
      </span>
    </div>
  );
};

export default Logo;
