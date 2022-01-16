import React, { memo } from 'react';
import styled from 'styled-components';
import ConfigureMolecules from './components/ConfigureMolecules/ComposeMolecules';
import PageTitle from '../components/PageTitle/PageTitle';

const CreatingPageWrap = styled.div`
    margin: 120px 0 104px 0;
`;
const CreatingPageContainer = styled.div`
`;

const CreatingPage = () => {
    return (
        <CreatingPageWrap>
            <CreatingPageContainer className='_container'>
                <PageTitle text="Выберите ингредиенты для создания салата:"/>
                <ConfigureMolecules/>
            </CreatingPageContainer>
        </CreatingPageWrap>
    );
};

export default memo(CreatingPage);