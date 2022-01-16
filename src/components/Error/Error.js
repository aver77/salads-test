import React from 'react';
import styled from 'styled-components';
import errorPic from '../../images/errorPic.png';

const ErrorWrapper = styled.div`
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;
const ErrorImg = styled.img`
    width: 84px;
    height: 84px;
`;
const ErrorMsg = styled.p`
    padding-top: 14px;
    font-size: 20px;
`;

const Error = () => {
    return (
        <ErrorWrapper>
            <ErrorImg src={errorPic} alt="error"/>
            <ErrorMsg>Ошибка загрузки</ErrorMsg>
        </ErrorWrapper>
    );
};

export default Error;