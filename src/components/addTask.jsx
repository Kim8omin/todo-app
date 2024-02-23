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

    if (todo.title.trim().length >= 3) {
      setError((prevError) => ({
        ...prevError,
        titleError: "",
      }));
    }

    if (todo.date.trim().length === 0) {
      setError((prevError) => ({
        ...prevError,
        dateError: "please fill in the date",
      }));
      inputDate.current.focus();
      return;
    }

    if (todo.title.trim().length >= 1) {
      setError((prevError) => ({
        ...prevError,
        dateError: "",
      }));
    }

    if (todo.category.trim().length === 0 || todo.category === "category") {
      setError((prevError) => ({
        ...prevError,
        categoryError: "please choose one from the category",
      }));
      inputCategory.current.focus();
      return;
    }

    if (todo.category.trim().length >= 1 && todo.category === !"category") {
      setError((prevError) => ({
        ...prevError,
        categoryError: "",
      }));
    }

    if (todo.todo.trim().length === 0) {
      setError((prevError) => ({
        ...prevError,
        todoError: "please write down the details",
      }));
      inputTodo.current.focus();
      return;
    }

    if (todo.todo.trim().length >= 1) {
      setError((prevError) => ({
        ...prevError,
        todoError: "",
      }));
    }

    if (todo.file.length < 1) {
      setError((prevError) => ({
        ...prevError,
        fileError: "please choose the image file to upload",
      }));
      inputFile.current.focus();
      return;
    }

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
  //input이 써지면 에러문구가 없어지는 부분
  useEffect(() => {
    if (error.titleError && todo.title.trim().length >= 3) {
      setError((prevError) => ({
        ...prevError,
        titleError: "",
      }));
    }
  }, [error.titleError, todo.title]);

  useEffect(() => {
    if (error.dateError && todo.date.trim().length >= 1) {
      setError((prevError) => ({
        ...prevError,
        dateError: "",
      }));
    }
  }, [error.dateError, todo.date]);

  useEffect(() => {
    if (
      error.categoryError &&
      todo.category.trim().length >= 1 &&
      todo.category !== "category"
    ) {
      setError((prevError) => ({
        ...prevError,
        categoryError: "",
      }));
    }
  }, [error.categoryError, todo.category]);

  useEffect(() => {
    if (error.todoError && todo.todo.trim().length >= 1) {
      setError((prevError) => ({
        ...prevError,
        todoError: "",
      }));
    }
  }, [error.todoError, todo.todo]);

  useEffect(() => {
    if (error.fileError && todo.file.length > 0) {
      setError((prevError) => ({
        ...prevError,
        todoError: "",
      }));
    }
  }, [error.fileError, todo.file]);

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
            {Object.values(error).some((value) => value) && (
              <p style={{ color: "red" }}>{error.titleError}</p>
            )}
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={todo?.date}
              onChange={handleChange}
              ref={inputDate}
            />
            {Object.values(error).some((value) => value) && (
              <p style={{ color: "red" }}>{error.dateError}</p>
            )}
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
            {Object.values(error).some((value) => value) && (
              <p style={{ color: "red" }}>{error.categoryError}</p>
            )}
            <textarea
              placeholder="Things to do..."
              name="todo"
              value={todo?.todo}
              onChange={handleChange}
              style={{ height: "90px", fontFamily: "inherit" }}
              ref={inputTodo}
            />
            {Object.values(error).some((value) => value) && (
              <p style={{ color: "red" }}>{error.todoError}</p>
            )}
            <input
              type="file"
              name="file"
              onChange={handleChange}
              ref={inputFile}
            />
            {Object.values(error).some((value) => value) && (
              <p style={{ color: "red" }}>{error.fileError}</p>
            )}
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
