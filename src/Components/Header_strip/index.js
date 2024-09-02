import React from "react";
import "./HeaderStrip.css";
// import slider
import "react-slideshow-image/dist/styles.css";
import { Fade } from 'react-slideshow-image';
import { Link } from "react-router-dom";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "30px",
  Padding: "0px",
};
const fadeImages = [
  {
    url: "https://file.hstatic.net/200000722513/file/asus_vivobook_16_-_m1605ya_mb303w_-_topbar_82e4e17fb65d4103864f8eee46c3eaf2.png",
    linkWeb: "https://gearvn.com/products/laptop-asus-vivobook-16-m1605ya-mb303w",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/ffd320_header_banner_b2s.png",
    linkWeb: "https://gearvn.com/pages/uu-dai-hssv",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/loa_xin_topbar_2c9a1595b2e64fc48d34b547c39078f0.png",
    linkWeb: "https://gearvn.com/collections/loa",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/pc_gvn_hssv_ffed3a.png",
    linkWeb: "https://gearvn.com/pages/pc-gvn",
  },
];

const HeaderStrip = () => {
  return (
    <div className="top-header topbar-banner d-lg-block d-xl-block d-none">
      <div className="list-banners">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <a href={fadeImage.linkWeb}><img style={{ width: '100%', height: '50px'}} src={fadeImage.url} /></a> 
          </div>
        ))}
      </Fade>
      </div>
    </div>
  );
};

export default HeaderStrip;
