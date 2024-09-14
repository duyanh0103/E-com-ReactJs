import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const imgStyle = {
  height: "250px",
  width: "500px",
  objectFit: 'cover',
  borderRadius: "5px",
  transition: "opacity 0.5s ease-in-out", 
};

const listBanner = [
  {
    url: "https://file.hstatic.net/200000722513/file/layout_web_-01.png",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/layout_web_-02.png",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/layout_web_-03.png",
  },
];
const BannerRight = () => {
  return (
    <div className="index-banner--list">
      {listBanner.map((item, index) => (
        <div className={`index-banner--item fade-box ${index+1}`}>
          <Link className="aspect-ratio" style={imgStyle}>
            <img src={item.url} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BannerRight;
