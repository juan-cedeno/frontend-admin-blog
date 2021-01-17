import { notificationMessage } from "../helpers/notification-message"
import { fechConToken , fechSinToken} from "../services/fechSinToken"
import { types } from "../types/types"
import { uiRemoveSetLoading, uiSetLoading} from "./ui"

export const starGetCourse = () => {

    return async (dispatch) => {

        try {
            const body = await fechSinToken ('course')
            const resp =  await body.json()
            if (resp.ok) {
                dispatch(getCourse(resp.course))
                dispatch(removeCourseActive())
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const startAddCourse = (course) => {
    return async (dispatch) => {
        
        dispatch(uiSetLoading())

        try {
            const body = await fechConToken('course' , course , 'POST')
            const resp = await body.json()

            if (resp.ok) {
                dispatch(addCourse(resp.course))
                notificationMessage('Success' , 'Course created' , 'success')
                dispatch(uiRemoveSetLoading())
            }else{
                notificationMessage('Error' , resp.message , 'danger')
                dispatch(uiRemoveSetLoading())
            }
        } catch (error) {
            console.log(error);
            dispatch(uiRemoveSetLoading())

        }
    }
}

export const startDeleteCourse = (course , id) => {
   
    return async (dispatch) => {

        dispatch(uiSetLoading())

        try {
            const body = await fechConToken(`course/${id}` , course , 'DELETE')
            const resp = await body.json()

            if (resp.ok) {
                dispatch(deleteCourse(course))
                notificationMessage('Success' , 'Course delete' , 'success')
                dispatch(uiRemoveSetLoading())
            }

        } catch (error) {
            console.log(error);
            dispatch(uiRemoveSetLoading())
        }
    }
}

export const startEditCourse = (course) => {
    return async (dispatch , getState) => {

        const {_id} = getState().course.courseActive

        dispatch(uiSetLoading())
        
        try {
            const body = await fechConToken(`course/${_id}` , course , 'PUT')
            const resp = await body.json()
            
            if (resp.ok) {
                dispatch (updateCourse(course))
                notificationMessage('Succes' , 'Edited course' , 'success')
                dispatch(uiRemoveSetLoading())
                
            }else {
                notificationMessage('Error' , resp.message , 'danger')
                dispatch(uiRemoveSetLoading())
            }

        } catch (error) {
            console.log(error);
            dispatch(uiRemoveSetLoading())

        }
    }
}

const getCourse = (course) => ({
    type : types.courseGetCourse,
    payload : course
})
const addCourse = (course) => ({
    type : types.courseAddCourse,
    payload : course
})
const deleteCourse = (course) => ({
    type : types.courseDeleteCourse,
    payload : course
})
export const startCourseActive = (course) => ({
    type : types.courseActiveCourse,
    payload : course
})
const removeCourseActive = () => ({type : types.courseRemoveCourseActive})
const updateCourse = (course) => ({
    type : types.courseEditCourse,
    payload : course
})
