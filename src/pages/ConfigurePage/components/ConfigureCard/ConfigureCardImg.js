import React, { memo } from 'react';
import styled from 'styled-components';

const ConfigureImgWrap = styled.div`
    width: 500px;
    height: 400px;
    @media screen and (max-width: 575px) {
        margin: 10px;
        width: 240px;
        height: 220px;
    }
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