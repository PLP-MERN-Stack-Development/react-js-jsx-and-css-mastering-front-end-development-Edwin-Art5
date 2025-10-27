// src/App.jsx
import React from "react";
import "./App.css";
import TaskManager from "./components/TaskManager";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="container">
      <h1>React Task Manager + API Integration</h1>
      <TaskManager />
      <UsersList />
    </div>
  );
}

export default App;
