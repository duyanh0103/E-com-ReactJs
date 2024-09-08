import React from "react";
import Logo from "../../../assets/images/logo_white.png";
import { Link } from "react-router-dom";

import DanhMucDropDown from "../DanhMucDropDown";
import { Button } from "@mui/material";
import { CiSearch } from "react-icons/ci";

// import header
import ContactBtn from "../headerButton/contactBtn";
import HeThongBtn from "../headerButton/heThongBtn";
import DonHangBtn from "../headerButton/donHangBtn";
import CartBtn from "../headerButton/cartBtn";
import LoginBtn from "../headerButton/Login";

import HeaderStrip from "../Header_strip";
import SearchBar from "../SearchBar";
import SubHeader from "../SubHeader";

export default function Header() {
  return (
    <div className="headerWrapper">
      <HeaderStrip />
      <header className="header">
        {/* <h1>E-com</h1> */}
        <div className="container">
          <div className="row">
            <div className="logo d-flex align-items-center col-sm-2">
              <Link to={"/"}>
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="d-flex align-items-center col-sm-10 search">
              <DanhMucDropDown />
              {/* Header search start */}
              <SearchBar />
              {/* Header search end */}

              <div className="d-flex align-items-center last ml-auto">
                <ContactBtn />

                <HeThongBtn />

                <DonHangBtn />
                <div className="ml-auto d-flex align-items-center cartTab">
                  <CartBtn />
                  <LoginBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Subheader */}
      <SubHeader/>
    </div>
  );
}
