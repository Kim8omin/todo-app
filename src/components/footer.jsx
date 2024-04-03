import React from "react";
import styled from "styled-components";
import StyledLinkComponent from "../util/StyledLink";

const Footer = () => {
  return (
    <FooterLayer>
      <TitleLayer>
        <h3>My task</h3>
        <p>Copyrignt © 2024 All rights reserved</p>
        <p>Powered By Kim8omin</p>
      </TitleLayer>
      <MenuLayer>
        <StyledLinkComponent to="/#mainSection" id="mainSection">
          <p>Home</p>
        </StyledLinkComponent>
        <StyledLinkComponent to="/#addTodoSection" id="addTodoSection">
          <p>Add Task</p>
        </StyledLinkComponent>
        <StyledLinkComponent to="/#myTodaySection" id="myTodaySection">
          <p>Recent</p>
        </StyledLinkComponent>
        <StyledLinkComponent to="/#myTodoSection" id="myTodoSection">
          <p>To do List</p>
        </StyledLinkComponent>
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
@media (max-width: 768px) {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  text-align: center;
}
}
`;
const TitleLayer = styled.div`
  margin-left: 80px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const MenuLayer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-right: 80px;

  p {
    color: black;
    cursor: pointer;

    &: hover {
      color: #212121;
    }
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;
