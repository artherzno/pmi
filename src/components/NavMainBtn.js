import React from 'react';
import IconHome from '../img/home.png';

function NavMainBtn(props) {
    return (
        <button>
            <div className="boxImage">
                <img src={IconHome} alt="icon" />
            </div>
            <p>{ props.name }</p> 
        </button>
    )
}

export default NavMainBtn;
