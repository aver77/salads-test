import React, { memo, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import BasketMoleculeList from './BasketMoleculeList/BasketMoleculeList';
import BasketSaladList from './BasketSaladList/BasketSaladList';
import { moleculeOrderComplete } from '../../../redux/moleculeReducer';
import { saladOrderComplete } from '../../../redux/saladReducer';
import PageBtnAdd from '../../components/PageBtn/PageBtnAdd';

const BasketItemsWrap = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 320px));
    grid-gap: 20px;
`;

const BasketItems = () => {
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

    return (
        <>
            <BasketItemsWrap>
                <BasketMoleculeList/>
                <BasketSaladList/>
            </BasketItemsWrap>
            <PageBtnAdd
                    itemAddToCart={sendBasketHandler} 
                    text="Отправить заказ!" 
                    modalCartText="Заказ отправлен!"
                    itemCart={allBasket}
            />
        </>
    );
};

export default memo(BasketItems);