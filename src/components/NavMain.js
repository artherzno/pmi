import React from 'react';
import NavMainBtn from './NavMainBtn';

function NavMain() {
    return (
        <div className="nav-main">
            <NavMainBtn name="หน้าหลัก" icon="home" />
            <NavMainBtn name="ข้อมูลของฉัน" icon="user" />
        </div>
    )
}

export default NavMain;
