import React from 'react';
import { Link } from 'react-router-dom';

import BtnEllipse from './BtnEllipse';

function BuyCoinAction() {
    return (
        <div className="buycoin-action">
            <div className="buycoin-action-box box-style">
                <div>
                    <img/>
                    <span>คะแนน VIP ที่ใช้</span>
                </div>
                <input type="number" step="1000" min="1000" max="3000" />
                <p className="buycoin-error">คุณมีคะแนนไม่เพียงพอ</p>
                <div className="">
                    <p>1 คะแนน แลกเหรียญได้ 1 เหรียญ</p>
                    <div>
                        <div>1,000 คะแนน</div>
                        <div>2,000 คะแนน</div>
                        <div>3,000 คะแนน</div>
                    </div>
                </div>
                <div className="buycoin-getcoin">
                    <span>ได้รับเหรียญ</span>
                    <img/>
                    <span>50 เหรียญ</span>
                </div>
            </div>
            <Link to="/">
                <BtnEllipse name="กลับ" color="grey" />
            </Link>

            <BtnEllipse name="ถัดไป" color="blue" />
        </div>
        
    )
}

export default BuyCoinAction;
