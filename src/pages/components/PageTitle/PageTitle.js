import React, { memo } from 'react';
import styled from 'styled-components';

const PageTitleWrap = styled.div`
    margin-bottom: 48px;
    text-align: center;
    @media screen and (max-width: 575px) {
        margin-bottom: 20px;
    }
`;
const PageTitleText = styled.span`
    font-size: 26px;
    font-weight: 500;
`;

const PageTitle = ({text}) => {
    return (
        <PageTitleWrap>
            <PageTitleText>{text}</PageTitleText>
        </PageTitleWrap>
    );
};

export default memo(PageTitle);