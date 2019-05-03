import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
    <div className="UserOutput">
        <p onClick={props.click}>{props.stringLength}</p>
    </div>
    )
};

export default userOutput;