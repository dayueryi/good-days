const showDetail =  (state = [],action)=>{
    const { type,data } = action
    switch (type) {
     
        case "showDetail":
       
        return data[0]
            break;
        default:
        return state
            break;
    }
    
}

export default showDetail