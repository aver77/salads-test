import React from 'react';
import { Link } from 'react-router-dom';

import HeaderImg from './HeaderTitleImg';

const HeaderTitle = () => {
    return (
        <div className='header__title'>
            <Link to='/'><HeaderImg/></Link>
            <p className='header__text-title'>Resto app</p>
        </div>
    );
};

export default HeaderTitle;