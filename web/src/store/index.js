import { createStore } from "redux"
import reducer from "./reducer/index.js"
//创建了单一的store，reducer只可能有一个 
const store = createStore(reducer)

export default store;