import React, { memo } from 'react';
import styled from 'styled-components';
import ConfigureCard from './ConfigureCard';

import readySalad from '../../../../images/readySalad.png';
import saladIngredients from '../../../../images/saladIngredients.png';

const ConfigureSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -20px;
    @media screen and (max-width: 575px) {
        margin: 0 -10px;
    }
`

const ConfigureCardSection = () => {
    return (
        <ConfigureSection>
            <ConfigureCard 
                imgLink={readySalad} 
                imgAlt="salad" 
                text="Выбрать готовый салат:" 
                linkBtn='/choosing'
            />
            <ConfigureCard 
                imgLink={saladIngredients} 
                imgAlt="ingredients" 
                text="Составить салат самому:" 
                linkBtn='/creating'
            />
        </ConfigureSection>
    );
};

export default memo(ConfigureCardSection);