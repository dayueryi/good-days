const search =  (state = [],action)=>{
    const { type,data } = action
    switch (type) {
     
        case "searchList":
       
        return data
            break;
        default:
        return state
            break;
    }
    
}

export default search