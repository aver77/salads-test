import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    height: 40px;
    min-width: 100%;
    background: #F4E5AC;
    box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.16);
    text-align: center;
`;
const FooterText = styled.p`
    font-size: 14px;
    color: #545454;
    margin-top: 13px;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterText>© 2022 NW Project | All Rights Reserved</FooterText>
        </FooterWrapper>
    );
};

export default Footer;