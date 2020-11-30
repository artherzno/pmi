import React from 'react';

import NoImage from '../assets/img/noimage.png';
import IconStarAdd from '../assets/img/ic-star-add.svg';
import IconScan from '../assets/img/ic-scan.svg';


function MainTransactionItem(props) {

    const amount = props.data.amount;
    const amount_status = props.data.amount_status;

    function checkAmountStatus() {
        if(amount_status=='addcoin') {
            return <span className="font-blue">{amount}</span>
        } else if(amount_status=='discount') {
            return <span className="font-black">{amount}</span>
        } else {
            return <span className="font-red">{amount}</span>
        }
    }

    function checkIcon() {
        if(amount_status=='addcoin') {
            return <img src={IconStarAdd} alt="icon" />;
        } else if(amount_status=='discount') {
            return <img src={IconScan} className="ic-scan" alt="icon" />;
        } else {
            return <img src={NoImage} alt="icon" />;
        }
    }

    return (
        <div className="main-transaction-item">
            <div className="_img">
                { checkIcon() }
            </div>
            <div className="_detail">
                <div className="_status">
                    <span className="font-black">{props.data.transaction_status}</span>
                    { checkAmountStatus() }
                </div>
                <div className="_idtimestmp">
                    <span>{props.data.transaction_id}</span>
                    <span>{props.data.timestamp}</span>
                </div>
            </div>
        </div>
    )
}

export default MainTransactionItem;
