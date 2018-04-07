import { combineReducers } from "redux"
import todolist from "./state/todolist.js"
import news from './state/news.js';
import subject from './state/subject.js';
// combineReducers是用来合并reducer的，因为creatstore只能有一个reducer，
// 但是一个reducer又只对应一个状态
const reducer = combineReducers({
    todolist,
    news,
    subject
})

export default reducer;