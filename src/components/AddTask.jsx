import React, { useState } from 'react';

// TaskList receives tasks and a function to update them
export default function TaskList({ tasks, onUpdateTask }) {
  const [editIndex, setEditIndex] = useState(null); // index of the task being edited
  const [editValue, setEditValue] = useState('');   // temporary value while editing

  // Start editing a task
  const startEditing = (index, currentText) => {
    setEditIndex(index);
    setEditValue(currentText);
  };
  const handleUpdateTask = (index, newText) => {
    const updatedTasks = [...taskList];
    updatedTasks[index] = newText;
    setTaskList(updatedTasks); // Set new updated array
  };
  // Save the updated task
  const handleSave = () => {
    if (editValue.trim() !== '') {
      onUpdateTask(editIndex, editValue);  // update in parent
      setEditIndex(null);                  // clear edit mode
      setEditValue('');                    // clear temporary input
    }
  };
  

  return (
    <div className="task-list">
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              // If in edit mode for this task
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)} // update temporary value
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              // Normal display mode
              <>
                {task}
                <button onClick={() => startEditing(index, task)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
