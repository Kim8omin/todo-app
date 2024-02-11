import React from "react";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const params = useParams();

  return (
    <div>
      <h2>Todo Detail page</h2>
      <h2>{params.title}</h2>
      <p>{params.date}</p>
      <div>{params.file}</div>
      <p>{params.category}</p>
      <p>{params.todo}</p>
    </div>
  );
};

export default TodoDetail;
