import React, { useEffect } from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const formFieldArray = [
  { type: "text", name: "title", placeholder: "Title", tag: "input" },
  { type: "text", name: "date", placeholder: "Due date", tag: "input" },
  {
    name: "category",
    placeholder: "Category",
    tag: "select",
    options: [
      { value: "", title: "please choose a category" },
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

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0]?.focus();
    }
    console.log(inputRef.current[0]);
  }, []);

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

    if (name === "date") {
      var dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

      if (!dateRegex.test(value)) {
        setToDoError("Date must be a valid 'mm/dd/yyyy' format");
      } else {
        setToDoError("");
      }
    }

    if (name === "category") {
      if (value === "") {
        setToDoError("Please select the category");
      } else {
        setToDoError("");
      }
    }

    if (name === "title") {
      if (value.trim().length === 0) {
        setToDoError("Please fill out title.");
      } else {
        setToDoError("");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Refs:", inputRef.current);

    for (let i = 0; i < inputRef.current.length; i++) {
      console.log("Field:", inputRef.current[i]);
      const field = inputRef.current[i];
      if (field.value.trim() === "") {
        alert(`Please fill out ${field.name}`);
        field.focus();
        return;
      }
    }

    addList({ ...todo, file: file });
    console.log("전송된 파일은 이것입니다.", file);
    console.log("전송된 todo는 이것입니다.", todo);

    setTodo({
      id: uuidv4(),
      title: "",
      date: "",
      category: "category",
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
            {formFieldArray.map((field, idx) => {
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
                        ref={(el) => (inputRef.current[idx] = el)}
                        //ref={inputTitle}
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
                        ref={(el) => (inputRef.current[idx] = el)}
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
                case "textarea":
                  return (
                    <React.Fragment key={field.name}>
                      <textarea
                        value={todo?.[field?.name]}
                        name={field?.name}
                        placeholder={field?.placeholder}
                        onChange={handleChange}
                        ref={(el) => (inputRef.current[idx] = el)}
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
                        ref={(el) => (inputRef.current[idx] = el)}
                        //ref={inputFile}
                      />
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

export default AddTask;

const TaskWrapper = styled.div`
margin-top: -5px;
width: 100%
max-height: 545px;
background-color: #F9FCF7;
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
    width: 70%;
    border: none;
    border-top: 2px solid #212121;
    color: #212121;
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
      background-color: #212121;
      border: 1px solid #212121;
      color: white;
      width: 85%;
      height: 45px;
      font-size: 16.5px;
      cursor: pointer;
      border-radius: 5px;
    }
  }
`;
