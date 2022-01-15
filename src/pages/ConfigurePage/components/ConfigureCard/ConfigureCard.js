import React, { memo } from 'react';
import ConfigureImg from './ConfigureCardImg';
import ConfigureBtn from './ConfigureCardBtn';
import ConfigureCardText from './ConfigureCardText';

const ConfigureCard = ({imgLink, imgAlt, text, linkBtn}) => {
    return (
        <div className='configure__wrap-section'>
            <ConfigureImg imgLink={imgLink} imgAlt={imgAlt}/>
            <ConfigureCardText text={text}/>
            <ConfigureBtn linkBtn={linkBtn}/>
        </div>
    );
};

export default memo(ConfigureCard);