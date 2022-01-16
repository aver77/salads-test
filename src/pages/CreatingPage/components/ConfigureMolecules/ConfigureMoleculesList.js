import React, { memo, useMemo } from 'react';
import MoleculeService from '../../../../services/moleculeService';

import emptyImg from '../../../../images/emptyImg.jpg';

const ChoosingSaladList = ({allMolecules, }) => {
    const MS = useMemo(() => new MoleculeService(), []);

    const imageHandler = (e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = emptyImg;
    }

    return (
        <div className='choosing__list'>
            {
                allMolecules.map((molecule) => {
                    return (
                        <div key={molecule._id} className='choosing__item'>
                            <p className='choosing__item-title'>{molecule.title}</p>
                            <div className='choosing__img-wrap'>
                                <img 
                                    style={{height: '200px', width: '250px'}}
                                    className='choosing__img-item'
                                    src={`${MS._apiBase}${molecule.image}`}
                                    alt={molecule.title} onError={imageHandler}
                                />
                            </div>
                            <div className='choosing__item-btn-wrap'>
                                <button 
                                    className='choosing__item-btn-elem'
                                    onClick={''}
                                >
                                    Выбрать
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default memo(ChoosingSaladList);