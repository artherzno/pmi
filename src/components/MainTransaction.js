import React from 'react';
import MainTransactionItem from './MainTransactionItem';

function MainTransaction(props) {
    console.log('Props: '+JSON.stringify(props.data));


    return (
        <div className="main-transaction">
            <h3 className="main-transaction-title">ประวัติรายการ</h3>
            {props.data.map((item) => <MainTransactionItem data={item} />)}
        </div>
    )
}

export default MainTransaction;
