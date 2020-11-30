import React from 'react';
import { Link } from 'react-router-dom';

import BtnSquare from './BtnSquare';

function MainAction() {
    return (
        <div className="main-action">
            <Link to="#">
                <BtnSquare name="แลกเหรียญเพิ่ม" icon="star-add" />
            </Link>
            <Link to="#">
                <BtnSquare name="เสนอส่วนลด" icon="scan" />
            </Link>
        </div>
    )
}

export default MainAction;
