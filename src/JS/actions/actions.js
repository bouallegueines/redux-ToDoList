import { ADD_TASK, DELETE_TASK, EDIT_TASK,TOGGLE_COMPLETE } from "../constants/actionsTyps";

export const addTask=(newTask)=>{
    return{type:ADD_TASK,payload:newTask}

}
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
}
);
export const editTask = (id, value) => ({
  type: EDIT_TASK,
  payload: { id, value },
});

export const complete = (id) => ({
  type: TOGGLE_COMPLETE,
  payload: id,
});