import React from 'react';
import IconHome from '../img/home.png';

function NavMainBtn(props) {
    return (
        <button className="btn-main">
            <div className="btn-image">
                <img src={IconHome} alt="icon" />
            </div>
            <p>{ props.name }</p> 
        </button>
    )
}

export default NavMainBtn;
