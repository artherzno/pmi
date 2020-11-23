import React from 'react';

import NoImage from '../img/noimage.png';


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

    return (
        <div className="main-transaction-item">
            <img src={NoImage} alt="icon" />
            <div className="_detail">
                <div className="_status">
                    <span className="font-black"><b>{props.data.transaction_status}</b></span>
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
