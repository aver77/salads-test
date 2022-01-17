import React from 'react';
import styled from 'styled-components';
import HeaderLi from './HeaderLi/HeaderLi';
import HeaderLiImg from './HeaderLi/HeaderLiImg';

const HeaderNavItem = styled.nav`
`;
const HeaderUl = styled.ul`
`;

const HeaderNav = () => {
    return (
        <HeaderNavItem>
            <HeaderUl>
                <HeaderLi link="basket">
                    <HeaderLiImg/>
                </HeaderLi>
            </HeaderUl>
        </HeaderNavItem>
    );
};

export default HeaderNav;