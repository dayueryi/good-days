import { combineReducers } from "redux"
import todolist from "./state/todolist.js"
const reducer = combineReducers({
    todolist,
})

export default reducer;