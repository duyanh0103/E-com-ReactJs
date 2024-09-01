import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import CountryDropDown from "../CountryDropDown";
import { Button, Input } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

export default function Header() {
  return (
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
                <CountryDropDown/>
                {/* Header search start */}
                <div className="headerSearch">
                    <input  type="text"className="inputSearch "  placeholder="Tìm kiếm sản phẩm..."/>
                    <Button><CiSearch size={24} className="searchIcon"/></Button>
                </div>
                {/* Header search end */}

                <div className="d-flex align-items-center last ml-auto">
                  <Button className="circle mr-3"><FiUser/></Button>
                  <div className="ml-auto d-flex align-items-center cartTab">
                    <span className="price">500,000 VND</span>
                    <div className="position-relative ml-2">
                      <Button className="circle"><BsCart3/></Button>
                      <span className="count d-flex align-items-center justify-content-center">2</span>
                    </div>
                    
                  </div>
                </div>
          </div>
        </div>
      </div>
    </header>
  );
}
