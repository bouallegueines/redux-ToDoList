import React from "react";
import { useDispatch } from "react-redux";
import { complete, deleteTask } from "../JS/actions/actions";
import EditTask from "./EditTask";

const TaskItem = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div className="text">
      <h1 style={{ color: "white", fontFamily: "initial", fontSize: "1em" }}>
        {el.task}
      </h1>
      <div className="btn">
        <button onClick={() => dispatch(deleteTask(el.id))}>remove</button>
        <EditTask el={el} />
        <button onClick={() => dispatch(complete(el.id))}>
          {" "}
          {el.isDone ? "Undo" : "complete"}{" "}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
