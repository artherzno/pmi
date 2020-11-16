import React from 'react';
import { useParams } from 'react-router-dom';

export default function ShowParam() {
    const {data} = useParams();

    return (
        <div>
            <h1>Show Parameter</h1>
            <p>param: {data}</p>
        </div>
    );
}