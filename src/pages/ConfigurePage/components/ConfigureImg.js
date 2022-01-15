import React, { memo } from 'react';

const ConfigureImg = ({imgLink, imgAlt}) => {
    return (
        <div className='configure__img'>
            <img className='configure__item-img' src={imgLink} alt={imgAlt} />
        </div>
    );
};

export default memo(ConfigureImg);