const todolist =  (state = [],action)=>{
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