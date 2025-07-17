import React from 'react';
import  { useState } from 'react';
import './Header.css'; 
import InputItem from './AddItemInput.jsx';
import TaskList from './AddTask.jsx';

export default function MyHeader() {
  console.log("MyHeader display");
  // Create state to hold the input value, rem-state goes first
  const [inputValue, setInputValue] = useState('');
  const [taskList, setTaskList] = useState([]); 

  const handleInputUpdate = (e) => {
    setInputValue(e.target.value);
  };
  const handleUpdateTask = (index, newText) => {
    const updatedTasks = [...taskList];  // create a copy of the tasks array
    updatedTasks[index] = newText;        // update the task at the given index
    setTaskList(updatedTasks);           
  };

  

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTaskList([...taskList, inputValue]); // add task to list
      setInputValue(''); // clear input
    }};
    

  return (
    <header className="header-container">
      <div className="logo-heading">
        <img
          src="https://img.icons8.com/clouds/100/test-passed.png"
          alt="Logo"
          className="logo"
        />
        <h1>My To Do List</h1>
      </div>

      <div className="edit-section">
        <InputItem value={inputValue} onChange={handleInputUpdate} />
        <button className="edit-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <TaskList tasks={taskList} onUpdateTask={handleUpdateTask}  />

      
    </header>
  );
}


//my-toDo-list-viteProject