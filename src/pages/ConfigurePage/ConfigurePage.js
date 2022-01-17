import React, { memo } from 'react';
import styled from 'styled-components';
import ConfigureCardSection from './components/ConfigureCard/ConfigureCardSection';
import ConfigureTitle from './components/ConfigureTitle';

const ConfigurePageWrap = styled.div`
    margin: 120px 0 104px 0;
`;
const ConfigurePageContainer = styled.div`   
`;

const ConfigurePage = () => {
    return (
        <ConfigurePageWrap>
            <ConfigurePageContainer className='_container'>
                <ConfigureTitle/>
                <ConfigureCardSection/>
            </ConfigurePageContainer>
        </ConfigurePageWrap>
    );
};

export default memo(ConfigurePage);