import { createStore } from "redux";
import taskReducer from "../reducer/task";
const devtools =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(taskReducer, devtools);

