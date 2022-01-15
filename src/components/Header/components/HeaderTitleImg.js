import React from 'react';

import headerImg from '../../../images/salad.png';

const HeaderTitleImg = () => {
    return (
        <div className='header__img'>
            <img className='header__item-img' src={headerImg} alt="salad pic" />
        </div>
    );
};

export default HeaderTitleImg;