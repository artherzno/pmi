import React from 'react';
import IconHome from '../assets/img/home.png';
import IconUser from '../assets/img/user.png';

function NavMainBtn(props) {
    return (
        <button className="btn-main">
            <div className="btn-image">
                { props.icon === 'home' ? <img src={IconHome} alt="icon" /> : <img src={IconUser} alt="icon" /> }
            </div>
            <p>{ props.name }</p> 
        </button>
    )
}

export default NavMainBtn;
