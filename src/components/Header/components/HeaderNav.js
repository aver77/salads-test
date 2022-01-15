import React from 'react';

import basketImg from '../../../images/basket.png';

const HeaderNav = () => {
    return (
        <nav className='header__nav'>
            <ul className='header__ul'>
                <li className='header__li'>
                    <span className='header__text-li'>Созданные заказы</span>
                </li>
                <li className='header__li'>
                    <img className='header__img-li' src={basketImg} alt="basket" />
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNav;