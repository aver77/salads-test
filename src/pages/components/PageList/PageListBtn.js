import React, { memo } from 'react';
import styled from 'styled-components';

const PageListBtnWrap = styled.div`
`;
const PageListBtnElem = styled.button`
    font-size: 18px;
    border: 1px solid rgba(84, 84, 84, 0.6);
    border-radius: 5px;
    background: #fff;
    padding: 2px 10px 2px 10px;
    margin-top: 18px;
    transition: .2s linear;
    &:focus, &:hover, &:active {
        outline: none;
        background: #E2ECA7; 
    }
`;

const PageListBtn = ({itemChoosingHandler, id, text, openModalHandler}) => {

    const btnClickHandler = () => {
        openModalHandler(true);
        itemChoosingHandler(id);
    }

    return (
        <>
            <PageListBtnWrap>
                <PageListBtnElem 
                    onClick={btnClickHandler}
                >
                    {text}
                </PageListBtnElem>
            </PageListBtnWrap>
        </>
    );
};

export default memo(PageListBtn);