import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const BannerBottom = () => {
  return (
    <div className="index-banner--bottom">
      <div className="index-banner--list">
        <div className="index-banner--item fade-box 1">
            <Link className="aspect-ratio" to="/pages/laptop-van-phong"><img src="https://file.hstatic.net/200000722513/file/layout_web_-05.png" alt="Laptop văn phòng" /></Link>
        </div>
        <div className="index-banner--item fade-box 2">
            <Link className="aspect-ratio" to="/pages/laptop-msi-gaming"><img src="https://file.hstatic.net/200000722513/file/layout_web_-04.png"/></Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
