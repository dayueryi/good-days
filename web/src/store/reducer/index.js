import { combineReducers } from "redux"
import todolist from "./state/todolist.js"
import news from "./state/news.js"
const reducer = combineReducers({
    todolist,
    news
})

export default reducer;