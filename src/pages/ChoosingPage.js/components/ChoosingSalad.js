import React, { useEffect, useMemo } from 'react';
import SaladService from '../../../services/saladService';
import { useDispatch, useSelector } from 'react-redux';
import { saladsRequested, saladsLoaded, saladsError } from '../../../redux/saladReducer';

import ChoosingImg from './ChoosingImg';
import PageList from '../../components/PageList/PageList';
import PageBtnAdd from '../../components/PageBtn/PageBtnAdd';
import Error from '../../../components/Error/Error';
import Loading from '../../../components/Loading/Loading';

const ChoosingSalad = () => {
    const { salads, error, loading } = useSelector(state => state.saladReducer);
    const dispatch = useDispatch();

    const allSalads = useMemo(() => salads, [salads]);

    useEffect(() => {
        if (!salads.length) {
            dispatch(saladsRequested())
            const SS = new SaladService();
            SS.getAllSalads()
                .then((res) => {
                    dispatch(saladsLoaded(res.result));
                })
                .catch(() => {
                    dispatch(saladsError());
                })
        }
    }, [dispatch, salads.length]);

    if (loading && !error) return <Loading/>
    if (error && !loading) return <Error/>

    return (
        <>
            <PageList allItems={allSalads}>
                <ChoosingImg/>
            </PageList>
            <PageBtnAdd text="Добавить в корзину"/>
        </>
    );
};

export default ChoosingSalad;