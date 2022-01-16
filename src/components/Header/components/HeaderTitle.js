import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderTitleImg from './HeaderTitleImg';

const HeaderTitleWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;
const HeaderTitleText = styled.p`
    margin-left: 24px;
    font-size: 22px;
    font-weight: 500;
`

const HeaderTitle = () => {
    return (
        <HeaderTitleWrap>
            <Link to='/'><HeaderTitleImg/></Link>
            <HeaderTitleText className='header__text-title'>Resto app</HeaderTitleText>
        </HeaderTitleWrap>
    );
};

export default HeaderTitle;