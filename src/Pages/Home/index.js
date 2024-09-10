import React from "react";

import SideBarMenu from "../../Components/SectionSlider/SideBar";
import Banner from "../../Components/SectionSlider/Banner";
export default function Home() {
  return (
    <div className="wrapperMain_content">
      <div className="section section-slider">
        <div className="container-fluid">
          <div className="d-flex index-slider--wrap">
            <SideBarMenu />
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
}
