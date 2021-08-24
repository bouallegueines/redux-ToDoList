import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem.js";

const TaskList = () => {
  const list = useSelector((state) => state.taskList);

  return (
    <div className='task'>
      {list.map((el) => (
        <TaskItem key={el.id} el={el} />
      ))}
    </div>
  );
};

export default TaskList;
