import React, { useState } from "react";
import "./Todolist.css";

function ToDoList() {
  const [inputTask, setInputTask] = useState("");
  const [list, setList] = useState([]);

  //   event handler for change
  const handleInputChange = (e) => {
    setInputTask(e.target.value);
  };

  //   event handler to add task
  const addTask = () => {
    if (inputTask.trim() !== "") {
      const newItem = { id: Math.random(), todo: inputTask };
      setList([...list, newItem]);
      setInputTask("");
    }
  };

  //   event handler for delete button

  const handleDeleteButton = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  //   event handler to edit
  const editTask = (id, editedTask) => {
    const newList = list.map((todo) =>
      todo.id === id ? { ...todo, todo: editedTask } : todo
    );
    setList(newList);
  };

  return (
    <div className="Todo">
      <h3>todo list</h3>
      <div className="Top">
        <input
          type="text"
          className="input"
          value={inputTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button className="btn" onClick={addTask}>
          ADD
        </button>
      </div>

      <ul>
        {list.map((todo) => (
          <li className="task" key={todo.id}>
            {todo.todo}
            <button
              onClick={() => editTask(todo.id, prompt("Edit task", todo.todo))}
            >
              Edit
            </button>
            <button onClick={() => handleDeleteButton(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
