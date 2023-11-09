import React, { useState } from "react";
import NewToDo from "../../components/NewToDo/NewToDo";
import ToDoTask from "../../components/ToDoTask/ToDoTask";

const ToDo = () => {
  const [list, setList] = useState([
    { id: 1, value: "table", isEdit: false },
    { id: 2, value: "chair", isEdit: false }
  ]);

  const createNewToDo = (newTodo) => {
    setList([...list, newTodo]);
  };

  const deleteToDo = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const editToDo = (item) => {
    const newList = createListCopy(list);
    newList.find((el) => el.id === item.id).isEdit = true;
    setList(newList);
  };

  const saveToDo = (id, updatedValue) => {
    const newList = createListCopy(list);
    const edittedTask = newList.find((el) => el.id === id);
    edittedTask.value = updatedValue;
    edittedTask.isEdit = false;
    setList(newList);
  };

  const createListCopy = (array) => {
    return array.map((el) => {
      return { ...el };
    });
  };
  return (
    <>
      <h2 className="toDo"> ToDo App</h2>
      <NewToDo toDoCount={list.length} createNewTodo={createNewToDo}></NewToDo>
      {list.map((item) => {
        return (
          <ToDoTask
            key={item?.id}
            item={item}
            editToDo={editToDo}
            deleteToDo={deleteToDo}
            saveToDo={saveToDo}
          ></ToDoTask>
        );
      })}
    </>
  );
};

export default ToDo;
