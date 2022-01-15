import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const ConfigureCardBtn = ({linkBtn}) => {
    return (
        <div className='configure__btn-wrap'>
            <Link to={linkBtn}>
                <button className='configure__item-btn'>Выбрать</button>
            </Link>
        </div>
    );
};
export default memo(ConfigureCardBtn);