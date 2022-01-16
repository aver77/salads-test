import React, { memo } from 'react';

const CreatingTitle = () => {
    return (
        <div className='creating__title-wrap'>
            <span className='creating__text-title'>Выберите ингредиенты для салата:</span>
        </div>
    );
};

export default memo(CreatingTitle);