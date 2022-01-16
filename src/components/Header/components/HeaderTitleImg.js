import React from 'react';
import styled from 'styled-components';

import headerImg from '../../../images/salad.png';

const ImgWrapper = styled.div`
`;
const ImgItem = styled.img`
    cursor: pointer;
    width: 48px;
    height: 48px;
`;

const HeaderTitleImg = () => {
    return (
        <ImgWrapper>
            <ImgItem src={headerImg} alt="salad pic" />
        </ImgWrapper>
    );
};

export default HeaderTitleImg;