const subjectKindName =  (state = [],action)=>{
    const { type,data } = action
    switch (type) {
     
        case "subjectKindNameList":
       
        return data
            break;
        default:
        return state
            break;
    }
    
}

export default subjectKindName