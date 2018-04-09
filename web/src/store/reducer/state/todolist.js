const todolist =  (state = [],action)=>{
    const { type,data } = action
    switch (type) {
        case "addList":
        return [...state,data]
            break;
        case "subjectList":
        return [...state,data]
            break;
        case "subjectDetail":
        return [...state,data]
                break;
        case "activeList":
        return [...state,data]
            break;
        case "templateList":
            return [...state,data]
            break;
        case "showDetail":
            return [...state,data]
            break;
        case "servicePriceList":
            return [...state,data]
            break;
            
        case "subjectKindNameList":
            return [...state,data]
            break;
        case "searchList":
            return [...state,data]
            break;
        default:
        return state
            break;
    }
    
}

export default todolist