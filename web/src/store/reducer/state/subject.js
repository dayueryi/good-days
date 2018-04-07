const subject =  (state = [],action)=>{
    const { type,data } = action
    switch (type) {
     
        case "subjectList":
       
        return data
            break;
        default:
        return state
            break;
    }
    
}

export default subject