import React from 'react';

import NoImage from '../assets/img/noimage.png';
import IconVIP from '../assets/img/ic-vip.svg';
import IconStar from '../assets/img/ic-star.svg';

function MainStatus() {
    return (
        <div className="main-status">
            <div className="main-box box-style">
                <div className="_left">
                    <img src={IconVIP} alt="icon" />
                    <div className="main-text">
                        <p>คะแนน VIP สะสม</p>
                        <h1 className="font-black">1,200</h1>
                    </div>
                </div>
                <div className="_right">
                    <img src={IconStar} alt="icon" />
                    <div className="main-text">
                        <p>ยอดเหรียญสะสม</p>
                        <h1 className="font-blue">60</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainStatus;
