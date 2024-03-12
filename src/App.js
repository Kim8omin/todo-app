import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Layout from "./components/layout";
import TodoDetail from "./components/todoDetail";
import DetailLayout from "./components/layout2";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
        <Route
          path="/todo/:id"
          element={
            <Layout>
              <TodoDetail />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
