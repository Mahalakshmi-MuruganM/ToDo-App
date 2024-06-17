// import React from 'react'

import { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="create-form">
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder="Enter Task"
      />
      <button type="button" onClick={handleAdd}>
        Submit
      </button>
    </div>
  );
}

export default Create;
