import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";


const ToDoList = ({todo}) => {
 
  
  return (
    <CardLayer>
        <h2>MY TODO</h2>
        <hr/>
        <CardList>
      <div>
        {todo && 
            todo.map((list) => {
          return (
            <li key={list.title}>
              <div>{list.file}</div>
              <div>
                <h3>{list.title}</h3>
                <p>{list.date}</p>
                <p>{list.category}</p>
                <p>{list.todo}</p>
              </div>
          </li>
          );
        })}
      </div>
      </CardList>
    </CardLayer>
  );
};

export default ToDoList;

const CardLayer= styled.div`
display: flex;
text-align: center;
flex-direction: column;
background-color: white; 
padding: 100px;

`

const CardList = styled.div`
display: flex;
flex-direction: row; 
background-color: #F1E3D9; 
`