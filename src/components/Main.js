import React from 'react';

import MainPointStatus from './MainPointStatus';
import MainPointAction from './MainPointAction';
import MainTransaction from './MainTransaction';

function Main() {
    return (
        <React.Fragment>
            <div className="container-top">
                <MainPointStatus />
            </div>
            <MainPointAction />
            <MainTransaction />
        </React.Fragment>
    )
}

export default Main;
