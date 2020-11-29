import React, { useState, useEffect } from 'react';

import MainPointStatus from '../components/MainPointStatus';
import MainPointAction from '../components//MainPointAction';
import MainAttention from '../components//MainAttention';
import MainTransaction from '../components//MainTransaction';

function Main(props) {
    const [dataTransaction, setDataTransaction] = useState([]);

    return (
        <React.Fragment>
            <div className="container-top">
                <MainPointStatus />
            </div>
            <MainPointAction />
            <MainAttention />
            <MainTransaction data={props.data} />
        </React.Fragment>
    )
}

export default Main;
