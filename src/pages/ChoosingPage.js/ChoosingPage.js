import React, { memo } from 'react';
import styled from 'styled-components';
import ChoosingSalad from './components/ChoosingSalad';
import PageTitle from '../components/PageTitle/PageTitle';

const ChoosingPageWrap = styled.div`
    margin: 120px 0 104px 0;
`;
const ChoosingPageContainer = styled.div`    
`;

const ChoosingPage = () => {
    return (
        <ChoosingPageWrap>
            <ChoosingPageContainer className='_container'>
                <PageTitle text="Выберите готовые салаты:"/>
                <ChoosingSalad/>
            </ChoosingPageContainer>
        </ChoosingPageWrap>
    );
};

export default memo(ChoosingPage);