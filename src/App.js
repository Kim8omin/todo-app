import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import TodoDetail from "./components/todoDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="todo/:title" element={<TodoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
