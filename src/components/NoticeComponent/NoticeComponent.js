import React from 'react';
import './NoticeComponent.css';

const noticeComponent = (props) => {
    return (
    <div>
        <p>{props.noticeMsg}</p>
    </div>
    )
};

export default noticeComponent;