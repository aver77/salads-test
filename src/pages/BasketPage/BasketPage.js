import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle/PageTitle';
import BasketItems from './components/BasketItems';

const BasketPageWrap = styled.div`
    margin: 120px 0 104px 0;
    @media screen and (max-width: 575px) {
        margin: 100px 0 70px 0;
    }
`;
const BasketPageContainer = styled.div`
`;

const BasketPage = () => {
    const isEmptyBasketMolecules = useSelector(state => state.moleculeReducer.moleculesInBasket);
    const isEmptyBasketSalads = useSelector(state => state.saladReducer.saladsInBasket);
    const allBasket = useMemo(() => {
        return isEmptyBasketMolecules.length + isEmptyBasketSalads.length
    },[isEmptyBasketMolecules.length, isEmptyBasketSalads.length]);

    return (
        <BasketPageWrap>
            <BasketPageContainer className='_container'>
                <PageTitle text="Корзина:"/>
                {!allBasket?<PageTitle text="Корзина на данный момент пуста!"/> : <></>}
                <BasketItems/>
            </BasketPageContainer>
        </BasketPageWrap>
    );
};

export default memo(BasketPage);