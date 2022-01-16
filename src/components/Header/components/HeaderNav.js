import React from 'react';
import { Link } from 'react-router-dom';

import basketImg from '../../../images/basket.png';

const HeaderNav = () => {
    return (
        <nav className='header__nav'>
            <ul className='header__ul'>
                <li className='header__li'>
                    <Link to='/history'>
                        <span className='header__text-li'>Созданные заказы</span>
                    </Link>
                </li>
                <li className='header__li'>
                    <Link to='basket'>
                        <img className='header__img-li' src={basketImg} alt="basket" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNav;