import React, { useMemo } from 'react';
import styled from 'styled-components';
import PageListTitle from '../../components/PageList/PageListTitle';
import BasketSaladImg from './BasketSaladList/BasketSaladImg';
import { useDispatch, useSelector } from 'react-redux';

import saladIngredients from '../../../images/saladIngredients.png';

const BasketWrapper = styled.div`
    margin: 120px 0 104px 0;
`;
const BasketContainer = styled.div`
`;
const BasketListItem = styled.div`
    width: 340px;
    height: 320px;
    border: 1px solid rgba(84, 84, 84, 0.4);
    border-radius: 5px;
    text-align: center;
    background: #F4E5AC;
    padding: 20px;
`

const BasketItems = () => {
    const basketSaladList = useSelector(state => state.saladReducer.saladsInBasket);
    const basketMoleculesList = useSelector(state => state.moleculeReducer.moleculesInBasket);

    console.log(basketSaladList);

    return (
        <BasketWrapper>
            <BasketContainer className='_container'>
                {
                    basketSaladList.map(item => {
                        return (
                            <BasketListItem key={item._id}>
                                {console.log(item.title)}
                                <PageListTitle title={item.title}/>
                                <BasketSaladImg/>
                            </BasketListItem>
                        )
                    })
                }
                {
                    basketMoleculesList.map((item, index) => {
                        let allsost = '';
                        return (
                            <BasketListItem key={index}>
                                <PageListTitle title={`Скомпонованный салат номер: ${++index}`}/>
                                <BasketSaladImg/>
                                {
                                    item.map((elem, index) => {
                                        allsost += ' ' + elem.title;
                                        return (
                                            <p key={elem._id}>
                                                {index === item.length - 1? allsost : <></>}
                                            </p>   
                                        )
                                    })
                                }
                            </BasketListItem>
                        )
                    })
                }
            </BasketContainer>
        </BasketWrapper>
    );
};

export default BasketItems;