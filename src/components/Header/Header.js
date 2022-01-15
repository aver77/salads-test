import React from 'react';

import HeaderNav from './components/HeaderNav';
import HeaderTitle from './components/HeaderTitle';

import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__wrapper _container'>
                <HeaderTitle/>
                <HeaderNav/>
            </div>
        </div>
    );
};

export default Header;