const initialData = {
    count: 100,
    data: 200
}
// const counterReducer = (state={count: 0}, action) => {
    const counterReducer = (state=initialData, action) => {
        switch(action.type){
            case "Increase_Count":
                return {count: ++state.count}

                case "Decrease_Count":
                    return {count: --state.count}
    
                    case "Reset_Count":
                        return {count: 0}

                        case "Increase_Data":
                            return {data: ++state.data+50}
            
                            case "Decrease_Count":
                                return {data: --state.data-50}
                
                                case "Reset_Count":
                                    return {data: 0}
                    
                default :
                return state
        }
     
}
export default counterReducer