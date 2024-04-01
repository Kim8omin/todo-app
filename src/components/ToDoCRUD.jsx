import React from "react";
import { useDispatch } from "react-redux";
import AddTask from "./addTask";
import Todo from "./todo";
import ToDoList from "./ToDoList";
import { todoActions } from "../slice/slice";

const ToDoCRUD = ({ testRef2 }) => {
  const dispatch = useDispatch();

  const addList = (todo) => {
    dispatch(todoActions.add(todo));
  };

  return (
    <>
      <AddTask addList={addList} testRef2={testRef2} />
      <Todo />
      <ToDoList />
    </>
  );
};

export default ToDoCRUD;
