import React from 'react';
import MainTransactionItem from './MainTransactionItem';

function MainTransaction() {
    return (
        <div className="main-transaction">
            <h3 className="main-transaction-title">ประวัติรายการ</h3>
            <MainTransactionItem />
        </div>
    )
}

export default MainTransaction;
