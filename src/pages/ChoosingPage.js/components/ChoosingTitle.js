import React, { memo } from 'react';

const ChoosingTitle = () => {
    return (
        <div className='choosing__title-wrap'>
            <span className='choosing__title-text'>Выберите салаты:</span>
        </div>
    );
};

export default memo(ChoosingTitle);