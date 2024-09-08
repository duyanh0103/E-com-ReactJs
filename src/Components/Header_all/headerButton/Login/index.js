
import { Button } from "@mui/material";
import React from "react";
import { FiUser } from "react-icons/fi";

const LoginBtn = () => {
  return (
    <div>
      <Button className="login">
        <div className="info d-flex align-items-center flex-row">
          <span className="label"><FiUser /></span>
          <span className="name">Đăng Nhập</span>
        </div>
      </Button>
    </div>
  );
};

export default LoginBtn;
