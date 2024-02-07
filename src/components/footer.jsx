import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        
        <FooterLayer>
          <TitleLayer>
            <h3>My task</h3>
            <p>Copyrignt © 2024 All rights reserved</p>
            <p>Powered By Kim8omin</p>
          </TitleLayer>
          <MenuLayer>
            <p>HOME</p>
            <p>ADD TASK</p>
            <p>MY TODO</p>
            <p>Today I Learn</p>
          </MenuLayer>
        </FooterLayer>
    );
};

export default Footer;

const FooterLayer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 40px 0 100px 0;
`
const TitleLayer = styled.div`
margin-left: 80px;
`
const MenuLayer = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
margin-right: 80px;

p {
    cursor: pointer;

    &: hover {
        color: #C07848;
    }
}
`