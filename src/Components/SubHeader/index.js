import React from 'react';
import './style.css';
import { Button } from '@mui/material';
import { GrTag } from "react-icons/gr";

const SubHeader = () => {
  return (
    <div className='sub-header'>
        <div className='container-fluid'>
            <div className='d-lg-block d-xl-block d-none'>
                <ul className='list-submenu list-submenu--desktop'>
                    <li className='item-submenu sm-1'>
                        <Button startIcon={<GrTag/>}><span> Săn Voucher GEARVN </span></Button>
                    </li>
                    <li className='item-submenu sm-1'>
                        <Button startIcon={<GrTag/>}><span> Tin công nghệ </span></Button>
                    </li>
                    <li className='item-submenu sm-1'>
                        <Button startIcon={<GrTag/>}><span> Video </span></Button>
                    </li>
                    <li className='item-submenu sm-1'>
                        <Button startIcon={<GrTag/>}><span> Hướng dẫn thanh toán </span></Button>
                    </li>
                    <li className='item-submenu sm-1'>
                        <Button startIcon={<GrTag/>}><span> Hướng dẫn trả góp </span></Button>
                    </li>
                    <li className='item-submenu sm-1'>
                        <Button startIcon={<GrTag/>}><span> Tra cứu bảo hành </span></Button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SubHeader;
