const login =  (state = [],action)=>{
    const { type,data } = action
    switch (type) {
     
        case "loginList":
       
        return data
            break;
        default:
        return state
            break;
    }
    
}

export default login