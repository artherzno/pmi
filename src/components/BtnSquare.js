import React from 'react';

import NoImage from '../assets/img/noimage.png';
import IconStarAdd from '../assets/img/ic-star-add.svg';
import IconScan from '../assets/img/ic-scan.svg';

function BtnSquare(props) {


    function checkIcon() {
        if(props.icon ==='star-add') {
            return (<img src={IconStarAdd} alt="icon" />);
        } else if(props.icon ==='scan') {
            return (<img src={IconScan} alt="icon" />);
        } else {
            return (<img src={NoImage} alt="icon" />);
        }
    }

    return (
        <button className="btn-square">
            <div className="btn-image">
                { checkIcon() }
            </div>
            <p className="font-black">{ props.name }</p> 
        </button>
    )
}

export default BtnSquare;
