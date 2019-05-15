import React from 'react';
import './StopNameComponent.css';

const stopNameComponent = (props) => {
    return (
    <div>
        <h1>{props.stopName}</h1>
    </div>
    )
};

export default stopNameComponent;