import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';

import Main from './Main';
import BuyCoin from './BuyCoin';

function Container(props) {
    return (
        <div className="container">
            <BrowserRouter>
                {/* <Main data={props.data} /> */}
                <Route exact path="/" render={()=> <Main data={props.data} /> }/>
                <Route path="/buycoin" render={()=> <BuyCoin />} />
            </BrowserRouter>
        </div>
    )
}

export default Container;