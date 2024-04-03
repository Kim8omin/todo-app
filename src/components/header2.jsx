import React, { useState } from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import hamburger from "../assets/hamburger.png";
import cancel from "../assets/cancel.png";
import UseMoveToSection from "../util/UseMoveToSection";
import { HashLink as Link } from "react-router-hash-link";

const DetailHeader = ({ onClickRef }) => {
  const [toggle, setToggle] = useState(false);
  const { clickHeaderButton } = UseMoveToSection();

  const onToggle = () => {
    setToggle(!toggle);
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  //   const clickHeaderButton = (id, offset = 80) => {
  //     const section = document.getElementById(id);

  //     if (section) {
  //       const sectionPosition = section.offsetTop;
  //       window.scrollTo({
  //         top: sectionPosition - offset,
  //         behavior: "smooth",
  //       });
  //       console.log(sectionPosition);
  //     }
  //   };

  return (
    <>
      <HeaderLayer>
        <MediaQuery minWidth={769}>
          <Title onClick={handleLogoClick}>My Task</Title>
          <MenuLayer>
            <StyledLink
              to="/#mainSection"
              scroll={() => {
                clickHeaderButton("mainSection");
              }}
            >
              Home
            </StyledLink>

            <StyledLink
              to="/#addTodoSection"
              scroll={() => {
                clickHeaderButton("addTodoSection");
              }}
            >
              Add Task
            </StyledLink>

            <StyledLink
              to="/#myTodaySection"
              scroll={() => {
                clickHeaderButton("myTodaySection");
              }}
            >
              Recent
            </StyledLink>

            <StyledLink
              to="/#myTodoSection"
              scroll={() => {
                clickHeaderButton("myTodoSection");
              }}
            >
              To do List
            </StyledLink>
          </MenuLayer>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <MobileLayer toggle={toggle}>
            <img
              src={hamburger}
              alt="hamburger"
              onClick={onToggle}
              width="25px"
            />
            <span>
              <h2>My Task</h2>
            </span>
            <div id="empty-space"></div>
          </MobileLayer>
          {toggle && <Overlay onClick={onToggle} />}
          {toggle && (
            <ToggleLayer>
              <img
                src={cancel}
                alt="cancel"
                onClick={onToggle}
                width="25px"
                id="cancel"
              />
              <NavWrapped>
                <StyledLink
                  to="/#mainSection"
                  scroll={() => {
                    clickHeaderButton("mainSection");
                  }}
                >
                  <Nav>
                    <NavText>Home</NavText>
                  </Nav>
                </StyledLink>
                <StyledLink
                  to="/#addTodoSection"
                  scroll={() => {
                    clickHeaderButton("addTodoSection");
                  }}
                >
                  <Nav>
                    <NavText>Add Task</NavText>
                  </Nav>
                </StyledLink>

                <StyledLink
                  to="/#myTodaySection"
                  scroll={() => {
                    clickHeaderButton("myTodaySection");
                  }}
                >
                  <Nav>
                    <NavText>Recent</NavText>
                  </Nav>
                </StyledLink>
                <StyledLink
                  to="/#myTodoSection"
                  scroll={() => {
                    clickHeaderButton("myTodoSection");
                  }}
                >
                  <Nav>
                    <NavText>To do List</NavText>
                  </Nav>
                </StyledLink>
              </NavWrapped>
            </ToggleLayer>
          )}
        </MediaQuery>
      </HeaderLayer>
    </>
  );
};

export default DetailHeader;

const HeaderLayer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 99px;
  background-color: #212121;
  position: sticky;
  top: 0px;
  z-index: 10;

  #cancel {
    margin: 20px;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  margin-left: 15px;
  color: rgb(242, 227, 217);
  cursor: pointer;
  display: block;
  font-family: "Open Sans", "Open Sans", Arial, sans-serif;
  font-size: 29px;
  font-weight: 700;
  height: 39px;
  letter-spacing: 3px;
  line-height: normal;
  margin-left: 80px;
`;

const MenuLayer = styled.div`
  display: flex;
  gap: 30px;
  margin-right: 80px;
  font-size: 19px;
  color: #f9fcf7;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f9fcf7;

  &:hover {
    font-weight: bold;
  }
`;

const MobileLayer = styled.div`
  width: 100%;
  display: ${({ toggle }) => (toggle ? "none" : "flex")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  img {
    cursor: pointer;
    padding: 20px;
  }

  span h2 {
    color: #f9fcf7;
    font-size: 1.1rem;
    text-align: center;
  }

  #empty-space {
    width: 60px;
  }
`;

const ToggleLayer = styled.div`
  display: flex;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: -1;
`;

const NavWrapped = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  flex-direction: column;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 3;
`;

const Nav = styled.div`
  text-decoration: none;
`;

const NavText = styled.h4`
  cursor: pointer;
  color: white;
  &:hover {
    color: #f9fcf7;
  }
`;
