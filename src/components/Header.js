import React from 'react'

import IconMenu from '../assets/img/menu.png';

function Header() {
    return (
        <div className="header">
            <h5 className="font-black">สวัสดี นครินทร์</h5>
            <p className="font-blue">1,200 คะแนน</p>
            <img src={IconMenu} alt="icon" />
        </div>
    )
}

export default Header
