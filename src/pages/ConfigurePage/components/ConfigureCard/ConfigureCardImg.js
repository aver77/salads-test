import React, { memo } from 'react';

const ConfigureCardImg = ({imgLink, imgAlt}) => {
    return (
        <div className='configure__img-wrap'>
            <img className='configure__item-img' src={imgLink} alt={imgAlt} />
        </div>
    );
};

export default memo(ConfigureCardImg);