import React, { memo } from 'react';

const ConfigureCardText = ({text}) => {
    return (
        <p className='configure__text-wrap'>{text}</p>
    );
};
export default memo(ConfigureCardText);