import React from 'react';
import styled from 'styled-components';

const LoadingItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(244,229,172, 0.6);
    overflow-x: hidden;
`;
const LoadingSpinner = styled.div`
    z-index: 101;
    width: 64px;
    height: 64px;
    color: #000;
`;

const Loading = () => {
    return (
        <LoadingItem>
            <LoadingSpinner className="spinner-border" role="status">
            </LoadingSpinner>
        </LoadingItem>
    );
};

export default Loading;