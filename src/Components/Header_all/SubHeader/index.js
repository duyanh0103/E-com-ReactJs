import React from 'react';
import './style.css';
import { Button } from '@mui/material';
import { GrTag } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
const SubHeader = () => {
  return (
    <div className='sub-header'>
        <div className='container-fluid'>
            <div className='d-lg-block d-xl-block d-none'>
                <ul className='list-submenu list-submenu--desktop'>
                    <li className='item-submenu sm-1'>
                        <Button ><span> <GrTag/> Săn Voucher GEARVN </span></Button>
                    </li>
                    <li className='item-submenu sm-1'>
                        <Button><span><IoNewspaperOutline/> Tin công nghệ </span></Button>
                    </li>
                    <li className='item-submenu sm-1'>
                        <Button ><span><FiYoutube/> Video </span></Button>
                    </li>
                    <li className='item-submenu sm-1'>
                        <Button ><span><MdPayment/> Hướng dẫn thanh toán </span></Button>
                    </li>
                    <li className='item-submenu sm-1'>
                        <Button ><span><BsCashCoin/> Hướng dẫn trả góp </span></Button>
                    </li>
                    <li className='item-submenu sm-1'>
                        <Button ><span><GoShieldCheck/> Tra cứu bảo hành </span></Button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SubHeader;
