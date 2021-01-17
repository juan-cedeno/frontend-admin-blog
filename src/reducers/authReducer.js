import {types} from '../types/types'

const initialState = {
    cheking : true,
    loading : false
}

export const authReducer = (state = initialState , action) => {
    
    switch (action.type) {
        case types.authUser:
            
           return {
                ...state,
                ...action.payload,
                cheking : false
           }
           case types.renewToken:
               return {
                   ...state,
                   cheking : false
               }
            case types.setLoading:
                return{
                    ...state,
                    loading : true
                }
            case types.removeSetLoading:
                return{
                    ...state,
                    loading : false
                }  
            case types.logAuth:
                return {
                    cheking : false
                }       
    
         default:
           return state
    }

}
