import React from 'react';

import ConfigureCardSection from './components/ConfigureCardSection';
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

export default ConfigurePage;