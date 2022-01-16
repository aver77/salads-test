import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderLiItem = styled.li`    
`;

const HeaderLi = ({link, children}) => {
    return (
        <HeaderLiItem>
            <Link to={link}>
                {children}
            </Link>
        </HeaderLiItem>
    );
};

export default HeaderLi;