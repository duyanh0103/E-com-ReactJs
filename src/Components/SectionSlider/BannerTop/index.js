import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.css";
import { Link } from "react-router-dom";
// const divStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundSize: "cover",
//     height: "400px",
//     width: "100%",
//   };
const listBanner = [
  {
    url: "https://file.hstatic.net/200000722513/file/web_slider_800x400_b2s.png",
    caption: "cap1: Back to school",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/banner_web_slider_800x400_xa_kho_t9.2024.jpg",
    caption: "",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/banner_web_slider_800x400_xa_kho_t9.2024.jpg",
    caption: "",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/web_slider_800x400_laptop_gaming.png",
    caption: "",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/gear_thumb_web_5ab605acf5ac4a3ea7a7adc276bf063b.png",
    caption: "",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/gearvn_800x400_asus_vivobook_gaming.jpg",
    caption: "",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/gear_thumb_web_5ab605acf5ac4a3ea7a7adc276bf063b.png",
    caption: "",
  },
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};
const BannerTop = () => {
  return (
    <div className="index-banner--top">
      <div className="index-slider slick-style">
        <Slide {...properties}>
          {listBanner.map((item, index) => (
            <div className="slick-list draggable" key={index}>
              <div className="slick-track">
                <div className="slick-slide" style={{ padding: "0" }}>
                  <Link><img className="aspect-ratio" src={item.url} /></Link>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default BannerTop;
