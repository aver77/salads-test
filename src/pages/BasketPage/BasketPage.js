import React, { memo } from 'react';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle/PageTitle';
import BasketItems from './components/BasketItems';

const BasketPageWrap = styled.div`
    margin: 120px 0 104px 0;
`;
const BasketPageContainer = styled.div`
`;
const BasketItemsWrap = styled.div`
`;

const BasketPage = () => {
    return (
        <BasketPageWrap>
            <BasketPageContainer className='_container'>
                <PageTitle text="Корзина:"/>
                <BasketItemsWrap>
                    <BasketItems/>
                </BasketItemsWrap>
            </BasketPageContainer>
        </BasketPageWrap>
    );
};

export default memo(BasketPage);