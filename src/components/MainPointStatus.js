import React from 'react';

import NoImage from '../img/noimage.png';

function MainPointStatus() {
    return (
        <div className="main-point-status">
            <h3>สะสมเหรียญ</h3>
            <div className="main-point-box">
                <div className="_left">
                    <img src={NoImage} alt="icon" />
                    <div className="main-point-text">
                        <p>คะแนน VIP สะสม</p>
                        <h1 className="font-black">1,200</h1>
                    </div>
                </div>
                <div className="_right">
                    <img src={NoImage} alt="icon" />
                    <div className="main-point-text">
                        <p>ยอดเหรียญสะสม</p>
                        <h1 className="font-blue">60</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPointStatus;
