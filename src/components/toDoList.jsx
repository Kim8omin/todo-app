import React from "react";
import styled from "styled-components";
import { useState } from "react";
import AddTask from "./addTask";


const ToDoList = () => {
  const [list , setList ] = useState([{
      title: "Reading a tech article",
      date: "Feb 8th 2024",
      category: "Reading",
      todo: "Reading about the react 2024 articles ",
      file: [],
  }])
 
  
const onAddItem = (item) =>{
    const newItem = {...item, id:10}
    setList((list)=>[...list, newItem])
}

  return (
    <>
    <AddTask onAdd={onAddItem}/>
    <CardLayer>
        <h2>MY TODO</h2>
        <hr/>
        <CardList>
      <div>
        {list && 
            list.map((l) => {
          return (
            <div key={l.title}>
              <div>{l.file}</div>
              <div>
                <h3>{l.title}</h3>
                <p>{l.date}</p>
                <p>{l.category}</p>
                <p>{l.todo}</p>
              </div>
          </div>
          );
        })}
      </div>
      </CardList>
    </CardLayer>
    </>
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