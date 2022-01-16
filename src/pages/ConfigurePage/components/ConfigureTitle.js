import React, { memo } from 'react';
import styled from 'styled-components';

const ConfigureTitleWrap = styled.div`
    margin-bottom: 48px;
    text-align: center;
`;

const ConfigureTitleText = styled.span`
    font-size: 26px;
    font-weight: 500;
`;

const ConfigureTitle = () => {
    return (
        <ConfigureTitleWrap>
            <ConfigureTitleText>Каким образом вы хотите скомпоновать салат?</ConfigureTitleText>
        </ConfigureTitleWrap>
    );
};

export default memo(ConfigureTitle);