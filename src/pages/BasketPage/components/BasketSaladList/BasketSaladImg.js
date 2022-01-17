import React from 'react';
import styled from 'styled-components';

import readySalad from '../../../../images/readySalad.png';

const BasketSaladImgWrap = styled.div`
`;
const BasketSaladImgElem = styled.img`
    width: 260px;
    height: 220px;
`;

const BasketSaladImg = () => {
    return (
        <BasketSaladImgWrap>
            <BasketSaladImgElem src={readySalad} alt="salad"/>
        </BasketSaladImgWrap>
    );
};

export default BasketSaladImg;