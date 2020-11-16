import React from 'react';
import NavMainBtn from './NavMainBtn';

function NavMain() {
    return (
        <div className="navMain">
            <NavMainBtn name="หน้าหลัก" />
            <NavMainBtn name="ข้อมูลของฉัน" />
        </div>
    )
}

export default NavMain;
