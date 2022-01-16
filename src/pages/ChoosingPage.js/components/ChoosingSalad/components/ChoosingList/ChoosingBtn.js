import React, { memo } from 'react';

const ChoosingBtn = () => {
    return (
        <div className='choosing__item-btn-wrap'>
            <button 
                className='choosing__item-btn-elem'
                onClick={''}
            >
                Выбрать
            </button>
        </div>
    );
};

export default memo(ChoosingBtn);