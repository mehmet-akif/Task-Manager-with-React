import React, { useState } from 'react';
import './App.css';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import TaskSearch from './TaskSearch';

function App() {
  const [tasks, setTasks] = useState([]);
  const [displayedTasks, setDisplayedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setDisplayedTasks(displayedTasks.filter((task) => task.id !== id));
  };

  const handleSearch = (query) => {
    const filteredTasks = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query.toLowerCase())
    );
    setDisplayedTasks(filteredTasks);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTaskForm addTask={addTask} />
      <TaskSearch tasks={tasks} handleSearch={handleSearch} />
      <TaskList tasks={displayedTasks.length > 0 ? displayedTasks : tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
