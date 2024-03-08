import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import UseMoveToSection from "../util/UseMoveToSection";

const StyledLinkComponent = ({ children, to, id }) => {
  const { clickHeaderButton } = UseMoveToSection();
  return (
    <div>
      <StyledLink to={to} scroll={() => clickHeaderButton(id)}>
        {children}
      </StyledLink>
    </div>
  );
};

export default StyledLinkComponent;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f2e3d9;

  &:hover {
    font-weight: bold;
  }
`;
