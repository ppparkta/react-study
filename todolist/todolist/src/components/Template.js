import React from 'react';
import './Template.css';

const Template = ({children, todoLength}) => {
    return (
        <div className='Template'>
            <div className='Title'>오늘의 할 일 ({todoLength})</div>
            <div>{children}</div>
        </div>
    );
}

export default Template;