import React, { useState, useEffect } from 'react';

import MainStatus from '../components/MainStatus';
import MainAction from '../components//MainAction';
import MainAttention from '../components//MainAttention';
import MainTransaction from '../components//MainTransaction';

function Main(props) {
    const [dataTransaction, setDataTransaction] = useState([]);

    return (
        <React.Fragment>
            <div className="container-top">
                <h3>สะสมเหรียญ</h3>
                <MainStatus />
            </div>
            <MainAction />
            <MainAttention />
            <MainTransaction data={props.data} />
        </React.Fragment>
    )
}

export default Main;
