import React, { memo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PageListTitle from '../../../components/PageList/PageListTitle';
import BasketImg from '../BasketImg';

import saladIngredients from '../../../../images/saladIngredients.png';

const BasketMoleculeListItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 360px;
    border: 1px solid rgba(84, 84, 84, 0.4);
    border-radius: 5px;
    text-align: center;
    background: #F4E5AC;
    padding: 20px;
`;
const BasketMoleculeText = styled.p`
    margin-top: 20px;
    font-size: 17px;
`

const BasketMoleculeList = () => {
    const basketMoleculesList = useSelector(state => state.moleculeReducer.moleculesInBasket);
    
    return (
        <>
            {
                basketMoleculesList.map((item, index) => {
                    let allsost = '';
                    return (
                        <BasketMoleculeListItem key={index}>
                            <PageListTitle title={`Созданный салат №: ${++index}`}/>
                            <BasketImg imgLink={saladIngredients}/>
                            {
                                item.map((elem, index) => {
                                    allsost += elem.title + '; ';
                                    return (
                                        <>
                                            {index === item.length - 1? <BasketMoleculeText key={elem._id}>Состав: {allsost}</BasketMoleculeText>:null}
                                        </>   
                                    )
                                })
                            }
                        </BasketMoleculeListItem>
                    )
                })
            }
        </>
    );
};
export default memo(BasketMoleculeList);