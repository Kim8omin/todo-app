import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import AddTask from "./addTask";
import Banner from "./banner";
import ToDoList from "./toDoList";
import Todo from "./todo";
import Footer from "./footer";

const Header = () => {
  return (
    <>
      <HeaderLayer>
        <Title>My task</Title>
        <MenuLayer>
          <span
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}>Home</span>
          <span
            onClick={() => {
              window.scrollTo({
                top: 550,
                behavior: "smooth",
              });
            }}
          >
            Add Task
          </span>
          <span
           onClick={() => {
            const todoSection = document.getElementById("myTodoSection");

            if (todoSection) {
              const targetPosition = todoSection.offsetTop;

              window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
              });
            }
          }}
        >
        My Todo</span>
          <span
          onClick={()=>{
            const todaySection = document.getElementById("myTodaySection");

            if(todaySection) {
                const target = todaySection.offsetTop;

                window.scrollTo({
                    top:target,
                    behavior: "smooth", 
                });
            }
          }}
          >
            Today I Learn</span>
        </MenuLayer>
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
