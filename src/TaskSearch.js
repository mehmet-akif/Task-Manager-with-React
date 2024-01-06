import React from 'react';

function TaskSearch({ handleSearch }) {
  const handleChange = (e) => {
    const query = e.target.value;
    handleSearch(query);
  };

  return (
    <div className='searchBar'>
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={handleChange}
      />
    </div>
  );
}

export default TaskSearch;
