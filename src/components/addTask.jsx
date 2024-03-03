import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const formFieldArray = [
  { type: "text", name: "title", placeholder: "Title", tag: "input" },
  { type: "date", name: "date", placeholder: "Date", tag: "input" },
  {
    name: "category",
    placeholder: "Category",
    tag: "select",
    options: [
      { value: "category", title: "category" },
      { value: "study", title: "study" },
      { value: "work", title: "work" },
      { value: "diary", title: "diary" },
    ],
  },
  { name: "todo", placeholder: "To do", tag: "textarea" },
  { type: "file", name: "file", tag: "file" },
];

const AddTask = ({ addList }) => {
  const [todo, setTodo] = useState({
    id: uuidv4(),
    title: "",
    date: "",
    category: "",
    todo: "",
  });
  const [file, setFile] = useState([]);

  //에러처리1
  const [toDoerror, setToDoError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [fillOut, setFillOut] = useState("");

  //에러처리2
  const inputTitle = useRef(null);
  const inputDate = useRef(null);
  const inputFile = useRef(null);
  const inputCategory = useRef(null);
  const inputTodo = useRef(null);

  const [error, setError] = useState({
    title: "",
    date: "",
    category: "",
    todo: "",
    file: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
    if (name === "file") {
      const files = event.target.files;
      const fileUrl = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      console.log("fileurl:::", fileUrl);
      setFile(fileUrl);
    }

    // // if (name === "file") {
    // //   console.log("file");
    //   const files = event.target.files;
    //   console.log(files);
    //   const fileUrl = Array.from(files).map((file) =>
    //     URL.createObjectURL(file)
    //   );
    //   console.log(fileUrl);

    //   setFile(fileUrl);

    //   // setTodo((prevTodo) => ({ ...prevTodo, [name]: fileUrl }));
    //   // console.log(todo.file);

    //   return;
    // } else {
    //   setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
    // }

    if (name === "todo") {
      if (value.trim().length < 4) {
        setToDoError("Please put more than three letters");
      } else {
        setToDoError("");
      }
    }

    if (name === "category") {
      if (value === "category") {
        setCategoryError("Please select the category");
      } else {
        setCategoryError("");
      }
    }

    // if (name === "date" ||  name === "file") {
    //   if (value.trim().length === 0) {
    //     setFillOut("Please fill out every input field.");
    //   } else {
    //     setFillOut("");
    //   }
    // }

    if (name === "title") {
      if (value.trim().length === 0) {
        setFillOut("Please fill out every input field.");
      } else {
        setFillOut("");
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

    if (todo.file.length === 1) {
      setError((prevError) => ({
        ...prevError,
        fileError: "",
      }));
    }

    addList({ ...todo, file: file });
    console.log("전송된 파일은 이것입니다.", file);
    console.log("전송된 todo는 이것입니다.", todo);

    setTodo({
      id: uuidv4(),
      title: "",
      date: "",
      category: "",
      todo: "",
    });

    setFile([]);
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
    if (error.fileError && todo.file.length === 1) {
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
          <hr />
          <p>Seoul, South Korea</p>
        </TitleLayer>
        <FormLayer>
          <form onSubmit={handleSubmit} className="form">
            {formFieldArray.map((field) => {
              switch (field?.tag) {
                case "input":
                  return (
                    <React.Fragment key={field.name}>
                      <input
                        type={field?.type}
                        name={field?.name}
                        placeholder={field?.placeholder}
                        value={todo?.[field?.name]}
                        onChange={handleChange}
                      />
                      {Object.values(error).some((value) => value) && (
                        <p key={`${field.name}-error`} style={{ color: "red" }}>
                          {error[field.name]}
                        </p>
                      )}
                    </React.Fragment>
                  );
                case "textarea":
                  return (
                    <React.Fragment key={field.name}>
                      <textarea
                        value={todo?.[field?.name]}
                        name={field?.name}
                        placeholder={field?.placeholder}
                        onChange={handleChange}
                      />
                      {toDoerror && (
                        <p key={`${field.name}-error`}>{toDoerror}</p>
                      )}
                      {Object.values(error).some((value) => value) && (
                        <p key={`${field.name}-error`} style={{ color: "red" }}>
                          {error[field.name]}
                        </p>
                      )}
                    </React.Fragment>
                  );
                case "file":
                  return (
                    <React.Fragment key={field.name}>
                      <input
                        type={field?.type}
                        name={field?.name}
                        onChange={handleChange}
                      />
                      {Object.values(error).some((value) => value) && (
                        <p key={`${field.name}-error`} style={{ color: "red" }}>
                          {error[field.name]}
                        </p>
                      )}
                    </React.Fragment>
                  );
                case "select":
                  return (
                    <React.Fragment key={field.name}>
                      <select
                        name={field?.name}
                        value={todo?.[field?.name]}
                        onChange={handleChange}
                      >
                        {field?.options?.map((option) => {
                          return (
                            <option key={option.title} value={option.value}>
                              {option.title}
                            </option>
                          );
                        })}
                      </select>
                      {categoryError && (
                        <p key={`${field.name}-error`}>{categoryError}</p>
                      )}
                      {Object.values(error).some((value) => value) && (
                        <p key={`${field.name}-error`} style={{ color: "red" }}>
                          {error[field.name]}
                        </p>
                      )}
                    </React.Fragment>
                  );
                default:
                  return null;
              }
            })}
            {/* <input
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
            )} */}
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

  hr {
    width: 300px;
    border: none;
    border-top: 2px solid #c07848;
    color: #c07848;
    overflow: visible;
    text-align: center;
    height: 5px;
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
      width: 85%;
      height: 45px;
      border: 1px solid #d4d7e5;
      border-radius: 5px;
    }

    button {
      background-color: #c07848;
      border: 1px solid #c07848;
      color: white;
      width: 85%;
      height: 45px;
      font-size: 16.5px;
      cursor: pointer;
      border-radius: 5px;
    }
  }
`;
