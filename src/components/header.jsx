import React, { useState } from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import hamburger from "../assets/hamburger.png";

const Header = ({ onClickRef }) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const clickHeaderButton = (id, offset = 80) => {
    const section = document.getElementById(id);

    if (section) {
      const sectionPosition = section.offsetTop;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
      console.log(sectionPosition);
    }
  };

  return (
    <>
      <HeaderLayer>
        <MediaQuery minWidth={769}>
          <Title onClick={handleLogoClick}>My task</Title>
          <MenuLayer>
            <span
              onClick={() => {
                // onClickRef("banner");

                clickHeaderButton("mainSection", 99);
                // const mainSection= document.getElementById("mainSection")

                // if (mainSection){
                //   const mainPosition=mainSection.offsetTop;
                //   window.scrollTo({
                //     top: mainPosition-99,
                //     behavior: "smooth",
                //   });
                // console.log(mainPosition)

                //   }}
              }}
              // onClick={()=>{
              //   clickButton('banner');
              // }}
            >
              Home
            </span>
            <span
              onClick={() => {
                //   const addSection = document.getElementById("addTodoSection");

                //   if (addSection) {
                //     const targetPosition = addSection.offsetTop;

                //     window.scrollTo({
                //       top: targetPosition-80,
                //       behavior: "smooth",
                //     });
                //   }
                // }}
                // onClick={()=>{
                //   clickButton('addTodo');
                // }}
                clickHeaderButton("addTodoSection");
              }}
            >
              Add Task
            </span>
            <span
              onClick={() => {
                clickHeaderButton("myTodoSection");
                //   const todoSection = document.getElementById("myTodoSection");

                //   if (todoSection) {
                //     const targetPosition = todoSection.offsetTop;

                //     window.scrollTo({
                //       top: targetPosition - 80,
                //       behavior: "smooth",
                //     });
                //     console.log(targetPosition);
                //   }
                // }}
              }}
            >
              To do List
            </span>
            <span
              onClick={() => {
                clickHeaderButton("myTodaySection");
              }}
            >
              Recent
            </span>
          </MenuLayer>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <MobileLayer toggle={toggle}>
            <img
              src={hamburger}
              alt="hamburger"
              onClick={onToggle}
              width="30px"
            />
          </MobileLayer>
          {toggle && <Overlay onClick={onToggle} />}
          {toggle && (
            <NavWrapped>
              <span>
                <Nav onClick={onToggle}>
                  <NavText>Add Task</NavText>
                </Nav>
              </span>

              <span>
                <Nav onClick={onToggle}>
                  <NavText>To do List</NavText>
                </Nav>
              </span>
              <span>
                <Nav onClick={onToggle}>
                  <NavText>Recent</NavText>
                </Nav>
              </span>
              <div className="division-line"></div>
            </NavWrapped>
          )}
        </MediaQuery>
      </HeaderLayer>
    </>
  );
};

export default Header;

const HeaderLayer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 99px;
  background-color: #c07848;
  position: sticky;
  top: 0px;
  z-index: 10;
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
  color: #f2e3d9;
  letter-spacing: 0.5px;
  cursor: pointer;

  span {
    &:hover {
      font-weight: bold;
    }
  }
`;

const MobileLayer = styled.div`
  display: ${({ toggle }) => (toggle ? "none" : "flex")};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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

  .division-line {
    border-top: 1px solid #444444;
  }
`;

const Nav = styled.div`
  text-decoration: none;
`;

const NavText = styled.h4`
  color: white;
  &:hover {
    color: yellow;
  }
`;
