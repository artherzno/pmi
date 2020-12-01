import React from 'react';
import { Link } from 'react-router-dom';

import BtnEllipse from './BtnEllipse';

import IconVIP from '../assets/img/ic-vip.svg'
import IconStar from '../assets/img/ic-star.svg'
import IconPlus from '../assets/img/ic-plus.svg'
import IconMinus from '../assets/img/ic-minus.svg'

function BuyCoinAction() {
    return (
        <div className="buycoin-action">
            <div className="buycoin-action-box box-style">
                <div className="_header">
                    <img src={IconVIP} alt="icon" />
                    <span>คะแนน VIP ที่ใช้</span>
                </div>
                <div className="_input">
                    <img src={IconMinus} alt="icon" />
                    <input type="number" step="1000" min="1000" max="3000" />
                    <img src={IconPlus} alt="icon" />
                    <p className="buycoin-error">คุณมีคะแนนไม่เพียงพอ</p>
                </div>
                <div className="_badge">
                    <p>1 คะแนน แลกเหรียญได้ 1 เหรียญ</p>
                    <div className="_badgelist">
                        <div className="_badgeitem">1,000 คะแนน</div>
                        <div className="_badgeitem">2,000 คะแนน</div>
                        <div className="_badgeitem">3,000 คะแนน</div>
                    </div>
                </div>
                <div className="_footer">
                    <div className="_left">
                        <span>ได้รับเหรียญ</span>
                    </div>
                    <div className="_right">
                        <img src={IconStar} alt="icon" />
                        <span>50 เหรียญ</span>
                    </div>
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
