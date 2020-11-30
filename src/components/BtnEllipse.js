import React from 'react';

function BtnEllipse(props) {
    return (
        <button className={`btn-ellipse _${ props.color }`}>
            <p className="font-white">{ props.name }</p> 
        </button>
    )
}

export default BtnEllipse;
