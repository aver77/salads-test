import React from 'react';
import styled from 'styled-components';

import basketImg from '../../../../images/basket.png';

const HeaderLiImgItem = styled.img`
    cursor: pointer;
    height: 48px;
    width: 48px;
    transition: .3s ease;
    &:focus, &:hover, &:active {
        opacity: 0.6;
    }
`

const HeaderLiImg = () => {
    return (
        <HeaderLiImgItem src={basketImg} alt="basket" />
    );
};

export default HeaderLiImg;