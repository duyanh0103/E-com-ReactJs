import React from "react";
import { NavLink } from "react-router-dom";
import { MdLaptop } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { BsPcDisplay } from "react-icons/bs";
import { RiRam2Line } from "react-icons/ri";
import { LuGamepad, LuSpeaker } from "react-icons/lu";
import { CgScreen } from "react-icons/cg";
import { FaRegKeyboard } from "react-icons/fa6";
import { BsMouse } from "react-icons/bs";
import { RiHeadphoneLine } from "react-icons/ri";
import { PiOfficeChairLight } from "react-icons/pi";
import { LuPrinter } from "react-icons/lu";
import { LuGift } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";


import "./style.css";
const menuList = [
  {
    icon: MdLaptop,
    name: "Laptop",
  },
  {
    icon: LuGamepad,
    name: "Laptop Gaming",
  },
  {
    icon: BsPcDisplay,
    name: "PC GVN",
  },
  {
    icon: BsPcDisplay,
    name: "Main, CPU, VGA",
  },
  {
    icon: BsPcDisplay,
    name: "Case, Nguồn, Tản",
  },
  {
    icon: RiRam2Line,
    name: "Ổ cứng, RAM, Thẻ nhớ",
  },
  {
    icon: LuSpeaker,
    name: "Loa, Micro, Webcam",
  },
  {
    icon: CgScreen,
    name: "Màn Hình",
  },
  {
    icon: FaRegKeyboard,
    name: "Bàn Phím",
  },
  {
    icon: BsMouse,
    name: "Chuột + Lót Chuột",
  },
  {
    icon: RiHeadphoneLine,
    name: "Tai Nghe",
  },
  {
    icon: PiOfficeChairLight,
    name: "Ghế - Bàn",
  },
  {
    icon: LuPrinter,
    name: "Phần mềm, mạng",
  },
  {
    icon: LuGamepad,
    name: "Handheld, Console",
  },
  {
    icon: LuGamepad,
    name: "Phụ Kiện (Hub, sạc, cáp...)",
  },
  {
    icon: LuGift,
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
