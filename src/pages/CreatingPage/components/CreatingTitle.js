import React, { memo } from 'react';

const CreatingTitle = () => {
    return (
        <div className='creating__title-wrap'>
            <span className='creating__text-title'>Составьте салат:</span>
        </div>
    );
};

export default memo(CreatingTitle);