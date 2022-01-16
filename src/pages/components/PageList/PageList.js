import React, { memo } from 'react';
import styled from 'styled-components';
import PageListTitle from './PageListTitle';
import PageListBtn from './PageListBtn';

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

const PageList = ({allItems, children}) => {
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
                            <PageListBtn text="Выбрать"/>
                        </ChoosingListItem>
                    )
                })
            }
        </ChoosingListWrap>
    );
};

export default memo(PageList);