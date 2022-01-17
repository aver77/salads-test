import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moleculeOrderComplete } from '../../redux/moleculeReducer';
import { saladOrderComplete } from '../../redux/saladReducer';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle/PageTitle';
import PageBtnAdd from '../components/PageBtn/PageBtnAdd';
import BasketItems from './components/BasketItems';
import BasketEmpty from './BasketEmpty';

const BasketPageWrap = styled.div`
    margin: 120px 0 104px 0;
    @media screen and (max-width: 575px) {
        margin: 100px 0 70px 0;
    }
`;
const BasketPageContainer = styled.div`
`;

const BasketPage = () => {
    const dispatch = useDispatch();
    const isEmptyBasketMolecules = useSelector(state => state.moleculeReducer.moleculesInBasket);
    const isEmptyBasketSalads = useSelector(state => state.saladReducer.saladsInBasket);
    const allBasket = useMemo(() => {
        return isEmptyBasketMolecules.length + isEmptyBasketSalads.length
    },[isEmptyBasketMolecules.length, isEmptyBasketSalads.length]);

    const sendBasketHandler = useCallback(() => {
        dispatch(moleculeOrderComplete());
        dispatch(saladOrderComplete());
    },[dispatch]);

    // if (!isEmptyBasketMolecules.length && !isEmptyBasketSalads.length) {
    //     return (
    //         <BasketEmpty/>
    //     )
    // }

    return (
        <BasketPageWrap>
            <BasketPageContainer className='_container'>
                <PageTitle text="Корзина:"/>
                <BasketItems/>
                <PageBtnAdd
                    itemCart={allBasket}
                    itemAddToCart={sendBasketHandler} 
                    text="Отправить заказ!" 
                    modalCartText="Заказ отправлен!"
                />
            </BasketPageContainer>
        </BasketPageWrap>
    );
};

export default memo(BasketPage);