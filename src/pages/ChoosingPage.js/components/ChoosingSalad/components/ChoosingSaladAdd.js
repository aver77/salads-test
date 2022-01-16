import React, { memo } from 'react';

const ChoosingSaladAdd = ({text}) => {
    return (
        <div className='choosing__btn-wrap'>
            <button className="choosing__btn-elem">{text}</button>
        </div>
    );
};

export default memo(ChoosingSaladAdd);