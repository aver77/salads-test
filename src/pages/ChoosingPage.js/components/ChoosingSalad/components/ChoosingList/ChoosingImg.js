import React, { memo } from 'react';

import readySalad from '../../../../../../images/readySalad.png';

const ChoosingImg = ({imgAlt}) => {
    return (
        <div className='choosing__img-wrap'>
            <img className='choosing__img-item' src={readySalad} alt={imgAlt} />
        </div>
    );
};

export default memo(ChoosingImg);