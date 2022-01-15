import React from 'react';
import HeaderImg from './HeaderTitleImg';

const HeaderTitle = () => {
    return (
        <div className='header__title'>
            <HeaderImg/>
            <p className='header__text-title'>Resto app</p>
        </div>
    );
};

export default HeaderTitle;