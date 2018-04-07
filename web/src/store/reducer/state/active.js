const active =  (state = [],action)=>{
    const { type,data } = action
    switch (type) {
     
        case "activeList":
       
        return data
            break;
        default:
        return state
            break;
    }
    
}

export default active