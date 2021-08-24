import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/actions/actions";

const AddTask = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), task: input, isDone: false }));
    setInput("");
  };
  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add!</button>
      </form>
    </div>
  );
};

export default AddTask;
