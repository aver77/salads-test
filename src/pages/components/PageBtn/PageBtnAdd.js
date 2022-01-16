import React, { memo } from 'react';
import styled from 'styled-components';

const PageBtnWrap = styled.div`
    margin-top: 24px;
    text-align: center;
`;
const PageBtnElem = styled.button`
        margin-top: 18px;
        border: 1px solid rgba(84, 84, 84, 0.6);
        border-radius: 5px;
        font-size: 20px;
        font-weight: 500;
        transition: .2s linear;
        background: #F4E5AC;
        padding: 6px 14px 6px 14px;
        &:focus, &:hover, &:active {
            outline: none;
            background: #F4E5AC;
            opacity: 0.6; 
        } 
`;

const PageBtnAdd = ({text}) => {
    return (
        <PageBtnWrap>
            <PageBtnElem className="choosing__btn-elem">{text}</PageBtnElem>
        </PageBtnWrap>
    );
};

export default memo(PageBtnAdd);