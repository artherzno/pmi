import React from 'react';
import { useParams } from 'react-router-dom';

export default function ShowParam() {
    const showdata = useParams();

    return (
        <div>
            <h1>Show Parameter</h1>
            <p>param: {showdata}</p>
        </div>
    );
}