import React, { memo } from 'react';
import styled from 'styled-components';

const ConfigureImgWrap = styled.div`
    width: 500px;
    height: 400px;
`;
const ConfigureImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

const ConfigureCardImg = ({imgLink, imgAlt}) => {
    return (
        <ConfigureImgWrap>
            <ConfigureImg src={imgLink} alt={imgAlt} />
        </ConfigureImgWrap>
    );
};

export default memo(ConfigureCardImg);