import { combineReducers } from "redux"
import todolist from "./state/todolist.js"
import news from './state/news.js';
import subject from './state/subject.js';
import active from './state/active.js';
import template from './state/template.js';
import subjectDetail from './state/subjectDetail.js';
import servicePrice from './state/servicePrice.js';
import showDetail from './state/showDetail.js';
import subjectKindName from './state/subjectKindName.js';
import search from './state/search.js';
import login from './state/login.js';
// combineReducers是用来合并reducer的，因为creatstore只能有一个reducer，
// 但是一个reducer又只对应一个状态
const reducer = combineReducers({
    todolist,
    news,
    subject,
    active,
    template,
    subjectDetail,
    servicePrice,
    showDetail,
    subjectKindName,
    search,
    login
})

export default reducer;