import React from 'react';

function BtnSquare(props) {
    return (
        <button className="btn-square">
            <div className="btn-image">
                <img alt="icon" />
            </div>
            <p>{ props.name }</p> 
        </button>
    )
}

export default BtnSquare;
