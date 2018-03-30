const todolist =  (state = [1],action)=>{
    const { type,data } = action
    switch (type) {
        case "addList":
        return [...state,data]
            break;
    
        default:
        return state
            break;
    }
}

export default todolist