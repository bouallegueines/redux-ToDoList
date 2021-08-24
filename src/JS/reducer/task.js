import { ADD_TASK, DELETE_TASK, EDIT_TASK,TOGGLE_COMPLETE } from "../constants/actionsTyps";

const initialState = {
  taskList: [
    {
      id: 0,
      task: "Gomycoding",
      isDone: true,
    },
    {
      id: 1,
      task: "Try to be happy",
      isDone: false,
    },
    {
      id: 2,
      task: "Learn NODE JS",
      isDone: false,
    },
  ],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, taskList: [...state.taskList, payload] };
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((el) => el.id !== payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((todo) =>
          todo.id === payload.id ? { ...todo, task: payload.value } : todo
        ),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        taskList: state.taskList.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
