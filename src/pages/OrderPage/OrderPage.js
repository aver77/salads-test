import React, { memo } from 'react';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle/PageTitle';

const OrderPageWrap = styled.div`
    margin: 120px 0 104px 0;
`;
const OrderPageContainer = styled.div`
`;

const OrderPage = () => {
    return (
        <OrderPageWrap>
            <OrderPageContainer className='_container'>
                <PageTitle text="История заказов:"/>
            </OrderPageContainer>
        </OrderPageWrap>
    );
};

export default memo(OrderPage);