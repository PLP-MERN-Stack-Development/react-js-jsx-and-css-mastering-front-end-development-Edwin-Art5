// src/components/TaskManager.jsx
import React, { useState } from "react";
import Button from "./Button";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Task Manager</h2>
      <div className="flex space-x-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
          className="flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Button onClick={addTask} variant="primary">
          Add
        </Button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white dark:bg-gray-800 p-2 rounded-md shadow-sm"
          >
            <span>{task}</span>
            <Button onClick={() => deleteTask(index)} variant="danger">
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
