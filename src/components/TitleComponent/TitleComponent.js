import React from 'react';
import './TitleComponent.css';

const titleComponent = (props) => {
    return (
    <div>
        <h1>{props.title}</h1>
    </div>
    )
};

export default titleComponent;