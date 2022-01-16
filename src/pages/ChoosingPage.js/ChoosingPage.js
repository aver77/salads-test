import React, { memo } from 'react';
import ChoosingSalad from './components/ChoosingSalad/ChoosingSalad';
import ChoosingTitle from './components/ChoosingTitle';

import './ChoosingPage.scss';

const ChoosingPage = () => {
    return (
        <div className='choosing'>
            <div className='choosing__wrapper _container'>
                <ChoosingTitle/>
                <ChoosingSalad/>
            </div>
        </div>
    );
};

export default memo(ChoosingPage);