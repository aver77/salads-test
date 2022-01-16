/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useEffect, useCallback, memo } from 'react';

import PageBtnAdd from '../../../components/PageBtn/PageBtnAdd';
import PageList from '../../../components/PageList/PageList';
import Loading from '../../../../components/Loading/Loading';
import Error from '../../../../components/Error/Error';

import MoleculeService from '../../../../services/moleculeService';
import { useSelector, useDispatch } from 'react-redux';
import { moleculesRequested, moleculesLoaded, moleculesError, moleculeChose, moleculeAddToCart } from '../../../../redux/moleculeReducer';
import ConfigureImg from './ComposeImg';

const ComposeMolecules = () => {
    const { molecules, choosedMolecules, error, loading } = useSelector(state => state.moleculeReducer);
    const dispatch = useDispatch();
    const allMolecules = useMemo(() => molecules, [molecules]);
    const allChoosedMolecules = useMemo(() => choosedMolecules, [choosedMolecules])

    const moleculeChoosingHandler = useCallback((id) => {
        dispatch(moleculeChose(id));
    }, [dispatch]);

    const addToCartMolecules = useCallback(() => {
        dispatch(moleculeAddToCart());
    }, [dispatch]);

    useEffect(() => {
        dispatch(moleculesRequested())
        const MS = new MoleculeService();
        MS.getAllMolecules()
            .then((res) => {
                dispatch(moleculesLoaded(res.result));
            })
            .catch(() => {
                dispatch(moleculesError());
            })
    }, []);

    if (loading && !error) return <Loading/>
    if (error && !loading) return <Error/>

    return (
        <>
            <PageList 
                itemChoosingHandler={moleculeChoosingHandler} 
                allItems={allMolecules} 
                modalText="Молекула выбрана. Можно выбрать еще и добавить в корзину!"
            >
                <ConfigureImg/>
            </PageList>
            <PageBtnAdd 
                itemAddToCart={addToCartMolecules} 
                text="Добавить в корзину" 
                modalCartText="Салат из выбранных молекул добавлен в корзину!"
                itemCart={allChoosedMolecules}
            />
        </>
    );
};

export default memo(ComposeMolecules);