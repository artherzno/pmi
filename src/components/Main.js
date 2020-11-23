import React, { useState, useEffect } from 'react';

import MainPointStatus from './MainPointStatus';
import MainPointAction from './MainPointAction';
import MainTransaction from './MainTransaction';

function Main(props) {
    const [dataTransaction, setDataTransaction] = useState([]);

    return (
        <React.Fragment>
            <div className="container-top">
                <MainPointStatus />
            </div>
            <MainPointAction />
            <MainTransaction data={props.data} />
        </React.Fragment>
    )
}

export default Main;
