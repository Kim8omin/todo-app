import React from "react";
import styled from "styled-components";
import ToDoList from "./toDoList";
import { useState, useEffect } from "react";

const AddTask = (props) => {
  const [todo, setTodo] = useState([
    {
      title: "",
      date: "",
      file: [],
      category: "",
      todo: "",
    },
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "file") {
      const files = event.target.files;
      const fileUrl = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );

      setTodo((todo) => ({ ...todo, [name]: fileUrl }));
    } else {
      setTodo((todo) => {
        return { ...todo, [name]: value };
      });
    }

    console.log("handleChange 실행", todo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd(todo);
    setTodo({
      title: "",
      date: "",
      file: "",
      category: "",
      todo: "",
    });
    console.log("handleSubmit 실행", todo);
  };

  return (
    <>
      <TaskWrapper id="addTodoSection">
        <TitleLayer>
          <h2>ADD TASK</h2>
          <hr></hr>
          <p>Seoul, South Korea</p>
        </TitleLayer>
        <FormLayer>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={todo.title}
              onChange={handleChange}
            />
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={todo.date}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Category"
              name="category"
              value={todo.category}
              onChange={handleChange}
            />
            <textarea
              placeholder="Things to do..."
              name="todo"
              value={todo.things}
              onChange={handleChange}
              style={{ height: "90px", fontFamily: "inherit" }}
            />
            <input type="file" name="file" onChange={handleChange} />
            <button type="submit">SUBMIT</button>
          </form>
        </FormLayer>
      </TaskWrapper>
    </>
  );
};

export default AddTask;

const TaskWrapper = styled.div`
margin-top: -5px;
width: 100%
max-height: 545px;
background-color: #F1E3D9;
text-align: center;
padding: 50px;
`;

const TitleLayer = styled.div`
  h2 {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
`;

const FormLayer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px;

    input,
    textarea {
      width: 620px;
      height: 43px;
      border: 1px solid #d4d7e5;
    }

    hr {
      width: 50px;
    }

    button {
      background-color: #c07848;
      border: 1px solid #c07848;
      color: white;
      width: 628px;
      height: 45px;
      font-size: 16.5px;
      cursor: pointer;
    }
  }
`;
