import React from "react";
import styled from "styled-components";
import { useState } from "react";
import AddTask from "./addTask";
import { Link } from "react-router-dom";

const ToDoList = () => {
  const [list, setList] = useState([
    {
      title: "Reading a tech article",
      date: "Feb 8th 2024",
      file: [],
      category: "Reading",
      todo: "Reading about the react 2024 articles ",
    },
  ]);

  const onAddItem = (item) => {
    const newItem = { ...item, id: 10 };
    setList((list) => [...list, newItem]);
  };

  return (
    <>
    
      <AddTask onAdd={onAddItem} />
      <div id="myTodoSection">
      <CardLayer>
        <h2>MY TODO</h2>
        <hr />
        <CardList>
          <EachCard>
            {list &&
              list.map((l) => {
                return (
                  <div key={l.title}>
                    <TaskCard>
                      <StyledLink to={`/todo/${l.title}`}>
                      <h3>{l.title}</h3>
                      <p>{l.date}</p>
                      <div>{l.file}</div>
                      <p>{l.category}</p>
                      <p>{l.todo}</p>
                      <p style={{marginTop:'150px'}}>Read More</p>
                      </StyledLink>
                    </TaskCard>
                  </div>
                );
              })}
            <AddButton>
              <h2 onClick={() => {
              window.scrollTo({
                top: 550,
                behavior: "smooth",
              });
            }}>add</h2>
            </AddButton>
          </EachCard>
        </CardList>
      </CardLayer>
    </div>
    </>
  );
};

export default ToDoList;

const CardLayer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: white;
  padding: 100px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const EachCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-item: center;
  gap: 50px;
`;

const TaskCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f1e3d9;
  border-radius: 10px;
  padding: 10px;
  width: 250px;
  height: 400px;
`;

const StyledLink = styled(Link)`
  text-decoration: none; 
  color: black; 

  &:hover {
    color: grey; 
  }
`;





const AddButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: #f1e3d9;
  color: white;
  border-radius: 10px;
  padding: 10px;
  width: 250px;
  height: 400px;

  h2 {
    text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
      font-weight: 800;
    }
  }
`;
