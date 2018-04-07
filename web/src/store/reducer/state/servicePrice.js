const servicePrice =  (state = [],action)=>{
    const { type,data } = action
    switch (type) {
     
        case "servicePriceList":
       
        return data
            break;
        default:
        return state
            break;
    }
    
}

export default servicePrice