import React, { useMemo, useEffect } from 'react';

import ConfigureMoleculesList from './ConfigureMoleculesList';
import Loading from '../../../../components/Loading/Loading';
import Error from '../../../../components/Error/Error';

import MoleculeService from '../../../../services/moleculeService';
import { useSelector, useDispatch } from 'react-redux';
import { moleculesRequested, moleculesLoaded, moleculesError } from '../../../../redux/moleculeReducer';

const ConfigureMolecules = () => {
    const { molecules, error, loading } = useSelector(state => state.moleculeReducer);
    const allMolecules = useMemo(() => molecules, [molecules]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!molecules.length) {
            dispatch(moleculesRequested())
            const MS = new MoleculeService();
            MS.getAllMolecules()
                .then((res) => {
                    dispatch(moleculesLoaded(res.result));
                })
                .catch(() => {
                    dispatch(moleculesError());
                })
        }
    }, [dispatch, molecules.length]);

    if (loading && !error) return <Loading/>
    if (error && !loading) return <Error/>

    return (
        <>
            <ConfigureMoleculesList allMolecules={allMolecules}/>
        </>
    );
};

export default ConfigureMolecules;