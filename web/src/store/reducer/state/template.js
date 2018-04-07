const template =  (state = [],action)=>{
    const { type,data } = action
    switch (type) {
     
        case "templateList":
       
        return data
            break;
        default:
        return state
            break;
    }
    
}

export default template