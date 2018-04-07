const subjectDetail =  (state = [],action)=>{
    const { type,data } = action
    switch (type) {
     
        case "subjectDetail":
       
        return data[0]
            break;
        default:
        return state
            break;
    }
    
}

export default subjectDetail