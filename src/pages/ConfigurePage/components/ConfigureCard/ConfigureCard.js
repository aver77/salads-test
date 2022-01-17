import React, { memo } from 'react';
import styled from 'styled-components';
import ConfigureImg from './ConfigureCardImg';
import ConfigureBtn from './ConfigureCardBtn';
import ConfigureCardText from './ConfigureCardText';

const ConfigureCardWrapSection = styled.div`
    width: 540px;
    height: 528px;
    border: 1px solid rgba(84, 84, 84, 0.4);
    border-radius: 5px;
    background: #F4E5AC;
    padding: 20px;
    text-align: center;
    margin: 20px;
`

const ConfigureCard = ({imgLink, imgAlt, text, linkBtn}) => {
    return (
        <ConfigureCardWrapSection>
            <ConfigureImg imgLink={imgLink} imgAlt={imgAlt}/>
            <ConfigureCardText text={text}/>
            <ConfigureBtn linkBtn={linkBtn}/>
        </ConfigureCardWrapSection>
    );
};

export default memo(ConfigureCard);