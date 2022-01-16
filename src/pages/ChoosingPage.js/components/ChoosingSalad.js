/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useCallback } from 'react';
import SaladService from '../../../services/saladService';
import { useDispatch, useSelector } from 'react-redux';
import { saladsRequested, saladsLoaded, saladsError, saladChose, saladAddToCart } from '../../../redux/saladReducer';

import ChoosingImg from './ChoosingImg';
import PageList from '../../components/PageList/PageList';
import PageBtnAdd from '../../components/PageBtn/PageBtnAdd';
import Error from '../../../components/Error/Error';
import Loading from '../../../components/Loading/Loading';

const ChoosingSalad = () => {
    const { salads, choosedSalads, error, loading } = useSelector(state => state.saladReducer);
    const dispatch = useDispatch();
    const allSalads = useMemo(() => salads, [salads]);
    const allChoosedSalads = useMemo(() => choosedSalads, [choosedSalads])

    const saladChoosingHandler = useCallback((id) => {
        dispatch(saladChose(id));
    }, [dispatch]);
    const addToCartSalads = useCallback(() => {
        dispatch(saladAddToCart());
    }, [dispatch]);

    useEffect(() => {
        dispatch(saladsRequested())
        const SS = new SaladService();
        SS.getAllSalads()
            .then((res) => {
                dispatch(saladsLoaded(res.result));
            })
            .catch(() => {
                dispatch(saladsError());
            })
    }, []);

    if (loading && !error) return <Loading/>
    if (error && !loading) return <Error/>

    return (
        <>
            <PageList 
                itemChoosingHandler={saladChoosingHandler} 
                allItems={allSalads} 
                modalText="Салат выбран. Можно выбрать еще и добавить в корзину!"
            >
                <ChoosingImg/>
            </PageList>
            <PageBtnAdd 
                itemAddToCart={addToCartSalads} 
                text="Добавить в корзину"
                modalCartText="Салаты добавлены в корзину!" 
                itemCart={allChoosedSalads}  
            />
        </>
    );
};

export default ChoosingSalad;