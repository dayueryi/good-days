const news =  (state = [],action)=>{
    const { type,data } = action
    switch (type) {
     
        case "listData":
       
        return data
            break;
        default:
        return state
            break;
    }
    
}

export default news