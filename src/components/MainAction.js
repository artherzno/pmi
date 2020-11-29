import React from 'react';

import BtnSquare from './BtnSquare';

function MainAction() {
    return (
        <div className="main-point-action">
            <BtnSquare name="ซื้อเหรียญเพิ่ม" icon="noimage" />
            <BtnSquare name="แลกส่วนลด" icon="home" />
        </div>
    )
}

export default MainAction;
