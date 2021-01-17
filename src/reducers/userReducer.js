import {types} from '../types/types'

const initialState = {
    user : [],
    userActive : null
}

export const userReducer = (state = initialState , action) => {

    switch (action.type) {
        
        case types.getUser:
            return {
                ...state,
                user : action.payload
            }
        case types.createUser:
            return{
                ...state,
                user : [
                    ...state.user,
                    action.payload,
                ]
            }    
        case types.deleteUser:
            return{
                ...state,
                user : [
                    ...state.user.filter(e => (
                        e._id !== action.payload._id 
                    ))
                ]
            }           
    
        default:
            return state
    }

}
