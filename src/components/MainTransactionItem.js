import React from 'react';

import NoImage from '../img/noimage.png';

function MainTransactionItem() {
    return (
        <div className="main-transaction-item">
            <img src={NoImage} alt="icon" />
            <div className="_detail">
                <div className="_status">
                    <span className="font-black"><b>ซื้อเหรียญเพิ่ม</b></span>
                    <span className="font-blue"><b>+400</b></span>
                </div>
                <div className="_idtimestmp">
                    <span>95739583134</span>
                    <span>12 ต.ค. 2563 15:20</span>
                </div>
            </div>
        </div>
    )
}

export default MainTransactionItem;
