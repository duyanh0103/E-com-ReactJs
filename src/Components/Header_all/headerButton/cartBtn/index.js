import { Button } from "@mui/material";
import React from "react";
import { BsCart3 } from "react-icons/bs";

const CartBtn = () => {
  return (
    <div className="position-relative mr-2">
      <Button className="circle">
        <BsCart3 />
      </Button>
      <span className="count d-flex align-items-center justify-content-center">
        2
      </span>
    </div>
  );
};

export default CartBtn;
