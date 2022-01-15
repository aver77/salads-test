import React, { memo } from 'react';
import ConfigureCardSection from './components/ConfigureCard/ConfigureCardSection';
import ConfigureTitle from './components/ConfigureTitle';

import './ConfigurePage.scss';

const ConfigurePage = () => {
    return (
        <div className='configure'>
            <div className='configure__wrapper _container'>
                <ConfigureTitle/>
                <ConfigureCardSection/>
            </div>
        </div>
    );
};

export default memo(ConfigurePage);