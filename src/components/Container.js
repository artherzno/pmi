import React from 'react';

import Main from './Main';

function Container(props) {
    return (
        <div className="container">
            <Main data={props.data} />
        </div>
    )
}

export default Container;
