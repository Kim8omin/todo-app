import React from "react";
import { useDispatch } from "react-redux";
import AddTask from "./addTask";
import Todo from "./todo";
import ToDoList from "./ToDoList";
import { addActions } from "../slice/slice";

const ToDoCRUD = () => {
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
  const dispatch = useDispatch();

  const addList = (todo) => {
    dispatch(addActions.add(todo));
  };

  return (
    <>
      <AddTask addList={addList} />
      <Todo />
      <ToDoList />
    </>
  );
};

export default ToDoCRUD;
