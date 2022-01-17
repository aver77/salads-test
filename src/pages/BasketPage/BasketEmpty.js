import React, {memo} from 'react';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle/PageTitle';

const BasketEmptyWrap = styled.div`
    margin: 120px 0 104px 0;
    @media screen and (max-width: 575px) {
        margin: 100px 0 70px 0;
    }
`;
const BasketEmptyContainer = styled.div`
`;

const BasketEmpty = () => {
    return (
        <BasketEmptyWrap>
            <BasketEmptyContainer className='_container'>
                <PageTitle text="Корзина:"/>
                <PageTitle text="Корзина на данный момент пуста!"/>
            </BasketEmptyContainer>
        </BasketEmptyWrap>
    );
};

export default memo(BasketEmpty);