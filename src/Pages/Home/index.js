import React from "react";

import SideBarMenu from "../../Components/SectionSlider/SideBar";
export default function Home() {
  return (
    <div className="wrapperMain_content">
      <div className="section section-slider">
        <div className="container-fluid">
          <div className="d-flex index-slider--wrap">
            <SideBarMenu />
            <div className="index-slider--banner"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
