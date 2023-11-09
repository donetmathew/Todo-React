import React, { useEffect, useState, useRef } from "react";

const ToDoTask = ({ item, deleteToDo, editToDo, saveToDo }) => {
  const [editTask, setEditTask] = useState("");

  const handleDelete = (id) => {
    deleteToDo(id);
  };

  const handleEdit = (item) => {
    editToDo(item);
    setEditTask(item.value);
  };

  const handleSave = (id, value) => {
    saveToDo(id, value);
  };

  const handleChange = (e) => {
    setEditTask(e.target.value);
  };

  return (
    <ul className="todoList">
      {!item?.isEdit ? (
        <li key={item.id}>
          {item.value}
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ) : (
        <div>
          <input
            id="editItem"
            type="text"
            placeholder="Edit ToDo"
            value={editTask}
            onChange={handleChange}
          />
          <button onClick={() => handleSave(item.id, editTask)}>Save</button>
        </div>
      )}
    </ul>
  );
};

export default ToDoTask;
