import React from "react";
import styled from "styled-components";
import { useState } from "react";
import AddTask from "./addTask";
import { Link } from "react-router-dom";
import Todo from "./todo";

const ToDoList = () => {
  const [list, setList] = useState([
    {
      title: "Reading a tech article",
      date: "Feb 8th 2024",
      file: [
        "https://images.pexels.com/photos/8520627/pexels-photo-8520627.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      category: "Reading",
      todo: "Reading about the react 2024 articles ",
    },
  ]);

  const onAddItem = (item) => {
    const newItem = { ...item, id: 10 };
    setList((list) => [newItem, ...list]);
  };

  return (
    <>
      <AddTask onAdd={onAddItem} />

      <CardLayer id="myTodoSection">
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
                        <div>
                          <h3>{l.title}</h3>
                        </div>
                        <div>
                          <p>{l.date}</p>
                        </div>
                        <div>
                          <img
                            id="img"
                            src={l.file[0]}
                            alt="imgFile"
                            style={{ width: "150px", height: "150px" }}
                          />
                        </div>
                        <div>
                          <p>{l.category}</p>
                        </div>
                        <div>
                          <p>{l.todo}</p>
                        </div>
                        <p>Read More</p>
                      </StyledLink>
                    </TaskCard>
                  </div>
                );
              })}
            <AddButton>
              <h2
                onClick={() => {
                  window.scrollTo({
                    top: 550,
                    behavior: "smooth",
                  });
                }}
              >
                add
              </h2>
            </AddButton>
          </EachCard>
        </CardList>
      </CardLayer>
      <Todo list={list} />
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

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
    font-size: 16px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  p {
    overflow: hidden;
    white-space: nowrap;
    max-width: 100px;
    max-height: 100px;
    font-size: 14px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;

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
