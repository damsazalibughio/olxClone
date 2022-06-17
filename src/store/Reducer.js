export default(state,action)=>{

    switch (action.type) {
       
        case "getCat":
            return {
                ...state,
                categories:[...state.categories, action.payload]
            }
        case "getLoc":
            return {
                ...state,
                locations:[...state.locations, action.payload]
            }
        case "getProdDetails":
            return {
                ...state,
                prodcutDetails:[...state.prodcutDetails, action.payload]
            }
            default :
            return state
        }
        
}