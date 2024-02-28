import React from "react";
import { useState } from "react";
import AddTask from "./addTask";
import Todo from "./todo";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./ToDoList";
import Main from "../pages/main";

const ToDoCRUD = ({ list, addList }) => {
  // const [list, setList] = useState([
  //   {
  //     id: 10,
  //     title: "Reading a tech article",
  //     date: "Feb 8th 2024",
  //     file: [
  //       "https://images.pexels.com/photos/8520627/pexels-photo-8520627.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     ],
  //     category: "Reading",
  //     todo: "Reading about the react 2024 articles ",
  //   },
  // ]);

  // const addList = (todo) => {
  //   setList((list) => [todo, ...list]);
  // };

  return (
    <>
      <AddTask addList={addList} />
      <Todo list={list} />
      <ToDoList list={list} />
    </>
  );
};

export default ToDoCRUD;
