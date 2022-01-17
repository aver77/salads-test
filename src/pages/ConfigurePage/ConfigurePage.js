import React, { memo } from 'react';
import styled from 'styled-components';
import ConfigureCardSection from './components/ConfigureCard/ConfigureCardSection';
import PageTitle from '../components/PageTitle/PageTitle';

const ConfigurePageWrap = styled.div`
    margin: 120px 0 104px 0;
    @media screen and (max-width: 575px) {
        margin: 100px 0 70px 0;
    }
`;
const ConfigurePageContainer = styled.div`   
`;

const ConfigurePage = () => {
    return (
        <ConfigurePageWrap>
            <ConfigurePageContainer className='_container'>
                <PageTitle text="Каким образом вы хотите сконфигурировать салат?"/>
                <ConfigureCardSection/>
            </ConfigurePageContainer>
        </ConfigurePageWrap>
    );
};

export default memo(ConfigurePage);