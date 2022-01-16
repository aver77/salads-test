import React, { memo } from 'react';
import ConfigureMolecules from './components/ConfigureMolecules/ConfigureMolecules';
import CreatingTitle from './components/CreatingTitle';

import './CreatingPage.scss';

const CreatingPage = () => {
    return (
        <div className='creating'>
            <div className='creating__wrapper _container'>
                <CreatingTitle/>
                <ConfigureMolecules/>
            </div>
        </div>
    );
};

export default memo(CreatingPage);