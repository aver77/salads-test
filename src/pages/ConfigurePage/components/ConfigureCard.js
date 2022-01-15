import React, { memo } from 'react';

import ConfigureImg from './ConfigureImg';
import ConfigureBtn from './ConfigureBtn';

const ConfigureCard = ({imgLink, imgAlt, text, btnText, linkBtn}) => {
    return (
        <div className='configure__wrap'>
            <ConfigureImg imgLink={imgLink} imgAlt={imgAlt}/>
            <p className='configure__text-wrap'>{text}</p>
            <ConfigureBtn btnText={btnText} linkBtn={linkBtn}/>
        </div>
    );
};

export default memo(ConfigureCard);