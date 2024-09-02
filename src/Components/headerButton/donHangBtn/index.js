import { Button } from "@mui/material";
import React from "react";
import { FaClipboardList } from "react-icons/fa6";
const DonHangBtn = () => {
  return (
    <Button
      variant="contained" // or "outlined" or "text" based on your design
      startIcon={<FaClipboardList />}
      className="circle mr-2"
    >
      Tra cứu đơn hàng
    </Button>
  );
};

export default DonHangBtn;
