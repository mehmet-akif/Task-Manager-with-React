import React from 'react';

function Task({ task, deleteTask }) {
  const { id, title } = task;

  return (
    <div>
      <p>{title}</p>
      <button className='deleteButton' onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
}

export default Task;
