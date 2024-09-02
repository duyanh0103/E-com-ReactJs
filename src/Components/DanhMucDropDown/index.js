import React from "react";
import { Button } from "@mui/material";
import { FaListUl } from "react-icons/fa6";
export default function DanhMucDropDown() {
  return (
    <div>
      <Button className="danhMucDrop">
        <div className="info d-flex flex-row">
          <span className="label mr-3"><FaListUl/></span>
          <span className="name">Danh Mục</span>
        </div>
      </Button>
      
    </div>
  );
}
