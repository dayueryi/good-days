const subjectDetail =  (state = [],action)=>{
    const { type,data } = action
    switch (type) {
     
        case "subjectDetail":
       
        return data
            break;
        default:
        return state
            break;
    }
    
}

export default subjectDetail