import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Layout from "./components/layout";
import TodoDetail from "./components/todoDetail";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [list, setList] = useState([
    {
      id: 10,
      title: "Reading a tech article",
      date: "Feb 8th 2024",
      file: [
        "https://images.pexels.com/photos/8520627/pexels-photo-8520627.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      category: "Reading",
      todo: "Reading about the react 2024 articles ",
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main list={list} />} />
        <Route
          path="/todo/:id"
          element={
            <Layout>
              <TodoDetail
                list={list.map((todo) => ({ ...todo, id: String(todo.id) }))}
              />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
