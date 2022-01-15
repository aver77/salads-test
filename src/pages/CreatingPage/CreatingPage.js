import React, { memo } from 'react';
import CreatingTitle from './components/CreatingTitle';

import './CreatingPage.scss';

const CreatingPage = () => {
    return (
        <div className='creating'>
            <div className='creating__wrapper _container'>
                <CreatingTitle/>
            </div>
        </div>
    );
};

export default memo(CreatingPage);