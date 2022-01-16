import React, { memo } from 'react';

const ConfigureTitle = () => {
    return (
        <div className='configure__title-wrap'>
            <span className='configure__title-text'>Каким образом вы хотите скомпоновать салат?</span>
        </div>
    );
};

export default memo(ConfigureTitle);