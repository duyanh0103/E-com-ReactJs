import { Button } from "@mui/material";
import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const ContactBtn = () => {
  return (
      <Button
        variant="contained" // or "outlined" or "text" based on your design
        startIcon={<TfiHeadphoneAlt />}
        className="circle mr-3"
      >
        Hotline 1900.5301
      </Button>
  );
};

export default ContactBtn;
