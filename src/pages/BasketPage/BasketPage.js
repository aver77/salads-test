import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { moleculeOrderComplete } from '../../redux/moleculeReducer';
import { saladOrderComplete } from '../../redux/saladReducer';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle/PageTitle';
import PageBtnAdd from '../components/PageBtn/PageBtnAdd';
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
    const dispatch = useDispatch();

    const sendBasketHandler = useCallback(() => {
        dispatch(moleculeOrderComplete());
        dispatch(saladOrderComplete());
    },[dispatch]);

    return (
        <BasketPageWrap>
            <BasketPageContainer className='_container'>
                <PageTitle text="Корзина:"/>
                <BasketItems/>
                <PageBtnAdd
                    itemAddToCart={sendBasketHandler} 
                    text="Отправить заказ!" 
                    modalCartText="Заказ отправлен!"
                />
            </BasketPageContainer>
        </BasketPageWrap>
    );
};

export default memo(BasketPage);