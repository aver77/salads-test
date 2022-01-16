import React, { memo, useState, useCallback } from 'react';
import styled from 'styled-components';
import PageListTitle from './PageListTitle';
import PageListBtn from './PageListBtn';
import ItemModal from '../../../components/modals/ItemModal';

const ChoosingListWrap = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
`;
const ChoosingListItem = styled.div`
    border: 1px solid rgba(84, 84, 84, 0.4);
    border-radius: 5px;
    text-align: center;
    background: #F4E5AC;
    padding: 20px;
`

const PageList = ({itemChoosingHandler, allItems, children, modalText, modalCartText}) => {

    const [openModal, setOpenModal] = useState(false);

    const openModalHandler = useCallback((value) => {
        setOpenModal(value);
    }, []);

    return (
        <ChoosingListWrap>
            {
                allItems.map(item => {
                    return (
                        <ChoosingListItem key={item._id} className='choosing__item'>
                            <PageListTitle title={item.title}/>
                            {
                                React.Children.map(children, (child) => {
                                    return React.cloneElement(child, {item})
                                })
                            }
                            <PageListBtn itemChoosingHandler={itemChoosingHandler} id={item._id} text="Выбрать" openModalHandler={openModalHandler}/>
                        </ChoosingListItem>
                    )
                })
            }
            {openModal && <ItemModal openModalHandler={openModalHandler} text={modalText} severity="success" color="#72CC51"/>}
        </ChoosingListWrap>
    );
};

export default memo(PageList);