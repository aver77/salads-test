import React from 'react';
import styled from 'styled-components';

import HeaderNav from './components/HeaderNav';
import HeaderTitle from './components/HeaderTitle';

const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    z-index: 999;
    height: 64px;
    background: #F4E5AC;
    box-shadow: 0 6px 6px 0px rgba(0, 0, 0, 0.16);
`;
const HeaderContainer = styled.div`
    padding-top: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer className='_container'>
                <HeaderTitle/>
                <HeaderNav/>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;