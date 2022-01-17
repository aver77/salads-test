import React, { memo } from 'react';
import styled from 'styled-components';

const PageListTitleElem = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
`

const PageListTitle = ({title}) => {
    return (
        <PageListTitleElem>{title}</PageListTitleElem>
    );
};

export default memo(PageListTitle);