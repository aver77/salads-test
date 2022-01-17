import React, { memo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PageListTitle from '../../../components/PageList/PageListTitle';
import BasketImg from '../BasketImg';

import readySalad from '../../../../images/readySalad.png';

const BasketSaladListItem = styled.div`
    width: 300px;
    height: 320px;
    border: 1px solid rgba(84, 84, 84, 0.4);
    border-radius: 5px;
    text-align: center;
    background: #F4E5AC;
    padding: 20px;
`;

const BasketSaladList = () => {
    const basketSaladList = useSelector(state => state.saladReducer.saladsInBasket);
    return (
        <>
            {
                basketSaladList.map(item => {
                    return (
                        <BasketSaladListItem key={item._id}>
                            <PageListTitle title={item.title}/>
                            <BasketImg imgLink={readySalad}/>
                        </BasketSaladListItem>
                    )
                })
            }
        </>
    );
};
export default memo(BasketSaladList);