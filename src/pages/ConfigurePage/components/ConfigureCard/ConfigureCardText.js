import React, { memo } from 'react';
import styled from 'styled-components';

const ConfigureText = styled.p`
    font-size: 20px;
    margin-top: 20px;
`

const ConfigureCardText = ({text}) => {
    return (
        <ConfigureText>{text}</ConfigureText>
    );
};
export default memo(ConfigureCardText);