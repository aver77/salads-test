import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const ConfigureBtn = ({btnText, linkBtn}) => {
    return (
        <div className='configure__btn'>
            <Link to={linkBtn}>
                <button className='configure__item-btn'>{btnText}</button>
            </Link>
        </div>
    );
};

export default memo(ConfigureBtn);