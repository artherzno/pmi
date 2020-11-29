import React from 'react';
import MainTransactionItem from './MainTransactionItem';

function MainTransaction(props) {
    return (
        <div className="main-transaction">
            <h3 className="main-transaction-title">ประวัติรายการ</h3>
            {props.data.map((item,i) => <MainTransactionItem data={item} key={i} />)}
        </div>
    )
}

export default MainTransaction;
