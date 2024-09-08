import React from "react";
import { NavLink } from "react-router-dom";
import { MdLaptop } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";

import "./style.css";
const menuList = [
  {
    icon: MdLaptop,
    name: "Laptop",
  },
  {
    icon: MdLaptop,
    name: "Laptop Gaming",
  },
  {
    icon: MdLaptop,
    name: "PC GVN",
  },
  {
    icon: MdLaptop,
    name: "Main, CPU, VGA",
  },
  {
    icon: MdLaptop,
    name: "Ổ cứng, RAM, Thẻ nhớ",
  },
  {
    icon: MdLaptop,
    name: "Loa, Micro, Webcam",
  },
  {
    icon: MdLaptop,
    name: "Màn Hình",
  },
  {
    icon: MdLaptop,
    name: "Bàn Phím",
  },
  {
    icon: MdLaptop,
    name: "Chuột + Lót Chuột",
  },
  {
    icon: MdLaptop,
    name: "Tai Nghe",
  },
  {
    icon: MdLaptop,
    name: "Ghế - Bàn",
  },
  {
    icon: MdLaptop,
    name: "Phần mềm, mạng",
  },
  {
    icon: MdLaptop,
    name: "Handheld, Console",
  },
  {
    icon: MdLaptop,
    name: "Phụ Kiện (Hub, sạc, cáp...)",
  },
  {
    icon: MdLaptop,
    name: "Thủ Thuật Giải đáp",
  },
];
const SideBarMenu = () => {
  return (
    <div className="index-slider--nav">
      <div className="sidebar-menu">
        <ul className="megamenu-nav-main">
          {menuList.map((menu, index) => (
            <li className="megamenu-item mg-1">
              <NavLink className="megamenu-link" to="/">
                <span className="megamenu-icon">
                  <menu.icon/>
                </span>
                <span className="megamenu-name"> {menu.name}</span>
                <span className="megamenu-ic-right">
                  <FaAngleRight />
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarMenu;
