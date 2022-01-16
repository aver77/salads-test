import React, { memo } from 'react';
import styled from 'styled-components';

import readySalad from '../../../images/readySalad.png';

const ChoosingImgWrap = styled.div`
`;
const ChoosingImgElem = styled.img`
    width: 260px;
    height: 220px;
`;

const ChoosingImg = ({imgAlt}) => {
    return (
        <ChoosingImgWrap>
            <ChoosingImgElem src={readySalad} alt={imgAlt} />
        </ChoosingImgWrap>
    );
};

export default memo(ChoosingImg);