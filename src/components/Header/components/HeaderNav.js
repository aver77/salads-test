import React from 'react';
import styled from 'styled-components';
import HeaderLi from './HeaderLi/HeaderLi';
import HeaderLiText from './HeaderLi/HeaderLiText';
import HeaderLiImg from './HeaderLi/HeaderLiImg';

const HeaderNavItem = styled.nav`
    width: 300px;
`;
const HeaderUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const HeaderNav = () => {
    return (
        <HeaderNavItem>
            <HeaderUl>
                <HeaderLi link="history">
                    <HeaderLiText text="Созданные заказы:"/>
                </HeaderLi>
                <HeaderLi link="basket">
                    <HeaderLiImg/>
                </HeaderLi>
            </HeaderUl>
        </HeaderNavItem>
    );
};

export default HeaderNav;