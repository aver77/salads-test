import React, { memo } from 'react';

const ConfigureCardText = ({text}) => {
    return (
        <p className='configure__wrap-text'>{text}</p>
    );
};
export default memo(ConfigureCardText);