import React from 'react';

function MainPointStatus() {
    return (
        <div className="main-point-status">
            <h3>สะสมเหรียญ</h3>
            <div className="main-point-box">
                <div className="_left">
                    <img alt="icon" />
                    <div className="main-point-text">
                        <p>คะแนน VIP สะสม</p>
                        <h2>1,200</h2>
                    </div>
                </div>
                <div className="_right">
                    <img alt="icon" />
                    <div className="main-point-text">
                        <p>ยอดเหรียญสะสม</p>
                        <h2>60</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPointStatus;
