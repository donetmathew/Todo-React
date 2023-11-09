import React, { useState, useRef } from "react";

const NewToDo = ({ createNewTodo, toDoCount }) => {
  const [newItem, setnewItem] = useState("");
  const input = useRef(null);

  const add = () => {
    if (input.current.value.trim() !== "") {
      createNewTodo({ id: toDoCount + 1, value: newItem });
      input.current.value = "";
      setnewItem("");
    }
  };

  const onInputChange = () => {
    setnewItem(input.current.value);
  };

  return (
    <>
      <div className="newToDo">
        <label htmlFor="newItem"> New ToDo </label>
        <input
          ref={input}
          id="newItem"
          type="text"
          placeholder="New ToDo"
          onChange={onInputChange}
        />
        <button className="addNew" onClick={add}>
          Add
        </button>
      </div>
    </>
  );
};

export default NewToDo;
