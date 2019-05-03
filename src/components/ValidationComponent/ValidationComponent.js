import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {
    return (
    <div className={props.stringLength > 5 
    ? "ValidationComponent__Pass" 
    : "ValidationComponent__Fail"}>
        {props.stringLength > 5
        ? <p>Text long enough</p>
        : <p>Text to short</p>
        }
    </div>
    )
};

export default validationComponent;