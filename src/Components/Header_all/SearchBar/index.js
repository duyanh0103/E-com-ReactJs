import { Button } from "@mui/material";
import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="headerSearch">
      <input
        type="text"
        className="inputSearch "
        placeholder="Tìm kiếm sản phẩm..."
      />
      <Button>
        <CiSearch size={24} className="searchIcon" />
      </Button>
    </div>
  );
};

export default SearchBar;
