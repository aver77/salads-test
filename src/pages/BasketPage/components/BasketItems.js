import React, { memo } from 'react';
import styled from 'styled-components';
import BasketMoleculeList from './BasketMoleculeList/BasketMoleculeList';
import BasketSaladList from './BasketSaladList/BasketSaladList';

const BasketItemsWrap = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 320px));
    grid-gap: 20px;
`;

const BasketItems = () => {
    return (
        <BasketItemsWrap>
            <BasketMoleculeList/>
            <BasketSaladList/>
        </BasketItemsWrap>
    );
};

export default memo(BasketItems);