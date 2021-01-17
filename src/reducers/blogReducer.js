import { types } from "../types/types";


const initialState = {
    blog : [],
    ActiveBlog: null
}

export const blogReducer = (state = initialState , action) => {
   
    switch (action.type) {
        
        case types.blogGet:
            return {
                ...state,
                blog : action.payload
            }
        case types.blogAdd:
            return {
                ...state,
                blog : [
                    ...state.blog,
                    action.payload
                ]
            }    
        case types.blogDelete:
            return {
                ...state,
                blog : [
                    ...state.blog.filter( b => (
                        b._id !== action.payload._id
                    ))
                ]
            }
        case types.blogActive:
            return {
                ...state,
                ActiveBlog : action.payload
            }

        case types.blogEdit:
            return {
                ...state,
                blog : [
                    state.blog.map( b => (
                        b._id === action.payload._id
                    ))
                ]
            }            

        default:
            return state
    }
}
