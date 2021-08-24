import React from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <div style={{ height: "700px" }} className="body">
      <div className="free">
        <h1 className="title">ToDo-List </h1>
        <AddTask />
        <div className='taskList' >
            <TaskList />
        </div>
      
     
      </div>
    </div>
  );
}

export default App;
