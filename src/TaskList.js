import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
