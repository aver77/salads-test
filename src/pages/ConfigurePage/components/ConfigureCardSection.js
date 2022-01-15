import React, { memo } from 'react';

import ConfigureCard from './ConfigureCard';

import readySalad from '../../../images/readySalad.png';
import saladIngredients from '../../../images/saladIngredients.png';

const ConfigureCardSection = () => {
    return (
        <div className='configure__section'>
            <ConfigureCard imgLink={readySalad} imgAlt="salad" text="Выбрать готовый салат:" btnText="Выбрать" linkBtn='/choosing'/>
            <ConfigureCard imgLink={saladIngredients} imgAlt="ingredients" text="Составить салат самому:" btnText="Выбрать" linkBtn='/creating'/>
        </div>
    );
};

export default memo(ConfigureCardSection);