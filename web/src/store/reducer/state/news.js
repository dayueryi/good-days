const news =  (state = [],action)=>{
    const { type,data } = action
    switch (type) {
        case "getPage":
       
        return data
            break;
    
        default:
        return state
            break;
    }
    
}

export default news