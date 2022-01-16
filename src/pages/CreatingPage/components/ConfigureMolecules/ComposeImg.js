import React, { useMemo, memo } from 'react';
import styled from 'styled-components';
import MoleculeService from '../../../../services/moleculeService';
import emptyImg from '../../../../images/emptyImg.jpg';

const ComposeImgWrap = styled.div`
`;
const ComposeImgElem = styled.img`
    width: 260px;
    height: 220px;
`;

const ComposeImg = ({item}) => {
    const MS = useMemo(() => new MoleculeService(), []);

    const imageHandler = (e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = emptyImg;
    }

    return (
        <ComposeImgWrap>
            <ComposeImgElem 
                src={`${MS._apiBase}${item.image}`}
                alt={item.title} onError={imageHandler}
            />
        </ComposeImgWrap>
    );
};

export default memo(ComposeImg);