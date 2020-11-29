import React from 'react';

import NoImage from '../img/noimage.png';

function BtnSquare(props) {

    return (
        <button className="btn-square">
            <div className="btn-image">
                <img src={NoImage} alt="icon" />
            </div>
            <p className="font-black">{ props.name }</p> 
        </button>
    )
}

export default BtnSquare;
