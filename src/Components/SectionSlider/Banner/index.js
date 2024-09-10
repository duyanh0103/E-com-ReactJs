import React from "react";
import './style.css'
import BannerTop from "../BannerTop";
import BannerBottom from "../BannerBottom";



const Banner = () => {
  return (
    <div className="index-slider--banner">
      <div className="index-slider--row">
        <div className="index-slider--coll coll-left">
            <BannerTop />
            <BannerBottom/>
        </div>
        <div className="index-slider--coll coll-right">Hello</div>
      </div>
    </div>
  );
};

export default Banner;
