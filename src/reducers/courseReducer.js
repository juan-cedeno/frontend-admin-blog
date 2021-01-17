import { types } from "../types/types"

const initialState = {
    course : [],
    courseActive : null
}

export const courseReducer = (state = initialState , action) => {
   
    switch (action.type) {
            
          case types.courseGetCourse:
              return {
                  ...state,
                  course : action.payload
              }

          case types.courseAddCourse:
              return {
                  ...state,
                  course : [
                      ...state.course,
                      action.payload
                  ]
              }

           case types.courseDeleteCourse:
               return {
                   ...state,
                   course : [
                       ...state.course.filter( c  => (
                           c._id !== action.payload._id
                       ))
                   ]
               }    
               
            case types.courseActiveCourse:
                return{
                    ...state,
                    courseActive : action.payload
                }

            case types.courseRemoveCourseActive:
                return{
                    ...state,
                    courseActive : null
                }

            case types.courseEditCourse:
                return {
                    ...state,
                    course : [
                        state.course.map( c => (
                            c._id === state.courseActive._id ? action.payload : c 
                        ))
                    ]
                }  

        default:
           return state
    }

}
