import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ addList }) => {
  const [todo, setTodo] = useState({
    id: uuidv4(),
    title: "",
    date: "",
    file: [],
    category: "",
    todo: "",
  });

  const [inputerror, setInputError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [fillOut, setFillOut] = useState("Please fill out every input field.");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "file") {
      const files = event.target.files;
      const fileUrl = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );

      setTodo((prevTodo) => ({ ...prevTodo, [name]: fileUrl }));
    } else {
      setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
    }

    if (name === "title") {
      if (value.trim().length > 0 && value.trim().length >= 10) {
        setInputError("Title should be 1 to 10 letters.");
      } else {
        setInputError("");
      }
    }

    if (name === "category") {
      if (value === "category") {
        setCategoryError("Please select the category");
      } else {
        setCategoryError("");
      }
    }

    if (name === "date" && name === "todo" && name === "file") {
      if (todo.date && todo.todo && todo.file.length > 0) {
        setFillOut("");
      } else {
        setFillOut("Please fill out every input field.");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(todo)?.some((value) => !value)) {
      window.alert("모든값을 입력하세요");
      return;
    }
    addList(todo);
    setTodo({
      id: uuidv4(),
      title: "",
      date: "",
      file: "",
      category: "",
      todo: "",
    });
  };

  console.log(todo);
  console.log(fillOut);

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
              value={todo?.title}
              onChange={handleChange}
            />
            {inputerror && <p>{inputerror}</p>}
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={todo?.date}
              onChange={handleChange}
            />
            <select
              name="category"
              value={todo?.category}
              onChange={handleChange}
            >
              <option value="category">category</option>
              <option value="study">study</option>
              <option value="work">work</option>
              <option value="diary">diary</option>
            </select>
            {categoryError && <p>{categoryError}</p>}
            <textarea
              placeholder="Things to do..."
              name="todo"
              value={todo?.todo}
              onChange={handleChange}
              style={{ height: "90px", fontFamily: "inherit" }}
            />
            <input type="file" name="file" onChange={handleChange} />
            {fillOut && <p>{fillOut}</p>}
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
    select,
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
