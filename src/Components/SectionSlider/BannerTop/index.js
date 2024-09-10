import React from 'react'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.css";
const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
    width: "100%",
  };
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
      url: "https://file.hstatic.net/200000722513/file/web_slider_800x400_laptop_gaming.png",
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
    <Slide {...properties}>
      {listBanner.map((item, index) => (
        <div key={index}>
          <div
            style={{ ...divStyle, backgroundImage: `url(${item.url})` }}
          >
          </div>
        </div>
      ))}
    </Slide>
  </div>
  )
}

export default BannerTop
