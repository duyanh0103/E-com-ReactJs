import React from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
export default function CountryDropDown() {
  return (
    <div>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Địa điểm</span>
          <span className="name">Việt Nam</span>
        </div>
        <span className="ml-auto"><FaAngleDown /></span>
      </Button>
      
    </div>
  );
}
