import { types } from "../types/types"


const initialState = {
    openModal : false,
    message : null,
    loading : false
}

export const uiReducer = (state = initialState , action) => {
    
    switch (action.type) {
        
        case types.openModal: 
            return {
                ...state,
                openModal : true
            }
            case types.closeModal: 
            return {
                ...state,
                openModal : false
            } 
            case types.uiSetMessage:
                return{
                    ...state,
                    message : action.payload
                }
            case types.uiRemoveSetMessage:
                return{
                    ...state,
                    message : null
                }   
            case types.uiSetLoading:
                return {
                    ...state,
                    loading : true
                } 

                case types.uiRemoveSetLoading:
                return {
                    ...state,
                    loading : false
                }                         
            
           
    
        default:
            return state
    }

}
