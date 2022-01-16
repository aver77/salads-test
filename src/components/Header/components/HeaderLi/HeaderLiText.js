import React from 'react';
import styled from 'styled-components';

const HeaderLiTextItem = styled.span`
    cursor: pointer;
    font-size: 20px;
    transition: .3s ease;
    &:focus, &:hover, &:active {
        opacity: 0.6;
    }
`;

const HeaderLiText = ({text}) => {
    return (
        <HeaderLiTextItem>{text}</HeaderLiTextItem>
    );
};

export default HeaderLiText;