import React from 'react'

import BuyCoinAction from '../components/BuyCoinAction'

function BuyCoin() {
    return (
        <React.Fragment>
            <div className="container-top">
                <h3>แลกเหรียญเพิ่ม</h3>
            </div>
            <BuyCoinAction />
        </React.Fragment>
    )
}

export default BuyCoin;
