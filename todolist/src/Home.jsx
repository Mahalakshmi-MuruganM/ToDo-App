// import React from "react";

import { useState, useEffect } from "react";
import Create from "./Create";
import "./styles/home.scss";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put(`http://localhost:3001/update/${id}`)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <h2 className="text-center">Todo List</h2>
      <Create />
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <div key={todos.id} className="todo-item">
              <div className="edit-icon" onClick={() => handleEdit(todo._id)}>
                {todo.done ? (
                  <i className="fa fa-check-circle-o"></i>
                ) : (
                  <i className="fa fa-circle-o"></i>
                )}
              </div>
              <span className={todo.done ? "line-through" : "todo-name"}>
                {todo.task}
              </span>
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={() => handleDelete(todo._id)}
              ></i>
            </div>
          );
        })
      ) : (
        <div>No Records</div>
      )}
    </div>
  );
}

export default Home;
