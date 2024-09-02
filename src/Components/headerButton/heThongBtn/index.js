import { Button } from "@mui/material";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
const HeThongBtn = () => {
  return (
    <Button
      variant="contained" // or "outlined" or "text" based on your design
      startIcon={<FaLocationDot />}
      className="circle mr-3"
    >
      Hệ thống Showroom
    </Button>
  );
};

export default HeThongBtn;
