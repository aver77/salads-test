import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ConfigureBtnWrap = styled.div`
`;
const ConfigureBtn = styled.button`
    border: 1px solid rgba(84, 84, 84, 0.6);
    border-radius: 5px;
    font-size: 18px;
    background: #fff;
    padding: 2px 10px 2px 10px;
    margin-top: 18px;
    transition: .2s linear;
    &:focus, &:hover, &:active {
        outline: none;
        background: #E2ECA7; 
    }
`

const ConfigureCardBtn = ({linkBtn}) => {
    return (
        <ConfigureBtnWrap>
            <Link to={linkBtn}>
                <ConfigureBtn>Выбрать</ConfigureBtn>
            </Link>
        </ConfigureBtnWrap>
    );
};
export default memo(ConfigureCardBtn);