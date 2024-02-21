import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import ErrorFunc from "../util/ErrorFunc";

const AddTask = ({ addList }) => {
  const [todo, setTodo] = useState({
    id: uuidv4(),
    title: "",
    date: "",
    file: [],
    category: "",
    todo: "",
  });

  //에러처리1
  const [inputerror, setInputError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [fillOut, setFillOut] = useState("Please fill out every input field.");

  //에러처리2
  const inputTitle = useRef(null);
  const inputDate = useRef(null);
  const inputFile = useRef(null);
  const inputCategory = useRef(null);
  const inputTodo = useRef(null);

  const [error, setError] = useState({
    titleError: "",
    dateError: "",
    categoryError: "",
    todoError: "",
    fileError: "",
  });

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

    if (todo.title.trim().length === 0) {
      setError((prevError) => ({
        ...prevError,
        titleError: "please fill in the title",
      }));
      inputTitle.current.focus();
      return;
    }
    // if (todo.date.trim().length === 0) {
    //   return { message: "Please fill in the date.", ref };
    // }
    // if (todo.category.trim().length === 0) {
    //   return { message: "Please select the category.", ref };
    // }
    // if (todo.todo.trim().length === 0) {
    //   return { message: "Please fill in the todo field.", ref };
    // }
    // if (todo.file.length < 1) {
    //   return { message: "Please add a file.", ref };
    // }

    // const titleError = ErrorFunc(todo.title, inputTitle);
    // const dateError = ErrorFunc(todo.date, inputDate);
    // const categoryError = ErrorFunc(todo.category, inputCategory);
    // const todoError = ErrorFunc(todo.todo, inputTodo);
    // const fileError = ErrorFunc(todo.file, inputFile);

    // if (titleError) {
    //   window.alert(titleError?.message);
    //   titleError?.ref.current.focus();
    //   return;
    // }
    // if (dateError) {
    //   window.alert(dateError?.message);
    //   dateError?.ref.current.focus();
    //   return;
    // }

    //       dateError?.message ||
    //       categoryError?.message ||
    //       todoError?.message ||
    //       fileError?.message
    //   );
    //   titleError?.ref?.current?.focus();

    //   return;
    // }

    // 에러가 없는 경우
    addList(todo);

    setTodo({
      id: uuidv4(),
      title: "",
      date: "",
      file: [],
      category: "",
      todo: "",
    });
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
              value={todo?.title}
              ref={inputTitle}
              onChange={handleChange}
            />
            {inputerror && <p>{inputerror}</p>}
            {error && <p>{error.titleError}</p>}
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={todo?.date}
              onChange={handleChange}
              ref={inputDate}
            />
            <select
              name="category"
              value={todo?.category}
              onChange={handleChange}
              ref={inputCategory}
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
              ref={inputTodo}
            />
            <input
              type="file"
              name="file"
              onChange={handleChange}
              ref={inputFile}
            />
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
