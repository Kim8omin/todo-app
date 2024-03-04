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
  console.log("업로드 되기 전의 파일", file);

  //handleChange에서 즉석으로 조건검사
  const [toDoerror, setToDoError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [fillOut, setFillOut] = useState("");

  const [error, setError] = useState({
    title: "",
    date: "",
    category: "",
    todo: "",
    file: "",
  });

  const inputRef = useRef([]);

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

    for (let i = 0; i < inputRef.current.length; i++) {
      if (inputRef.current[i].value === "") {
        alert(inputRef.current[i].name + "는(은) 필수 입력사항입니다.");
        inputRef.current[i].focus();
        break;
      }
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
                        ref={(el) => (inputRef.current[0] = el)}
                        //ref={inputTitle}
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
                        ref={(el) => (inputRef.current[1] = el)}
                        //ref={inputTodo}
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
                        ref={(el) => (inputRef.current[2] = el)}
                        //ref={inputFile}
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
                        ref={(el) => (inputRef.current[3] = el)}
                        //ref={inputCategory}
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

            {fillOut && <p>{fillOut}</p>}
            <button type="submit">SUBMIT</button>
          </form>
        </FormLayer>
      </TaskWrapper>
    </>
  );
};
