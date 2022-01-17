import React, { memo } from 'react';
import styled from 'styled-components';

const BasketImgWrap = styled.div`
`;
const BasketImgElem = styled.img`
    width: 260px;
    height: 220px;
`;

const BasketSaladImg = ({imgLink}) => {
    return (
        <BasketImgWrap>
            <BasketImgElem src={imgLink} alt="salad"/>
        </BasketImgWrap>
    );
};

export default memo(BasketSaladImg);