import React, { memo } from 'react';
import ChoosingTitle from '../../../ChoosingTitle';
import ChoosingImg from './ChoosingImg';
import ChoosingBtn from './ChoosingBtn';

const ChoosingSaladList = ({allSalads}) => {
    return (
        <div className='choosing__list'>
            {
                allSalads.map((salad) => {
                    return (
                        <div key={salad._id} className='choosing__item'>
                            <ChoosingTitle title={salad.title}/>
                            <ChoosingImg imgAlt={salad.title}/>
                            <ChoosingBtn/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default memo(ChoosingSaladList);