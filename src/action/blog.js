import { notificationMessage } from "../helpers/notification-message"
import { fechConToken, fechSinToken } from "../services/fechSinToken"
import { types } from "../types/types"
import { uiRemoveSetLoading, uiSetLoading } from "./ui"


export const startGetBlog = (page , limit) => {

    return async (dispatch) => {
        try {
            const body = await fechSinToken('blog')
            const resp = await body.json()

            if (resp.ok) {
                dispatch(getBlog (resp.blogs) )
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}

export const startAddBlog = (blog) => {
    return async (dispatch) => {

        dispatch(uiSetLoading())

        try {
            const body = await fechConToken('blog' , blog , 'POST')
            const resp = await body.json()


            if (resp.ok) {
                dispatch (addBlog(resp.blog))
                
                dispatch(uiRemoveSetLoading())
                notificationMessage('Success' , 'Blog created' , 'success')
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

export const startDeleteBlog = (blog , id) => {
    return async (dispatch) => {

        dispatch(uiSetLoading())

        try {
            const body = await fechConToken(`blog/${id}` , blog , 'DELETE')
            const resp = await body.json()

            if (resp.ok) {
                dispatch(deleteBlog(blog))
                notificationMessage('Success' , 'Blog deleted' , 'success')
                dispatch( uiRemoveSetLoading())
            }
            
        } catch (error) {
            console.log(error);
            dispatch(uiRemoveSetLoading())
        }
    }
}

export const startEditBlog = (blog) => {
    return async (dispatch , getState) => {

        try {
        dispatch(uiSetLoading())

        const {_id} = getState().blog.ActiveBlog

        const body = await fechConToken(`blog/${_id}` , blog , 'PUT')
        const resp = await body.json()

        if (resp.ok) {
            dispatch(editBlog(blog))
            notificationMessage('Success' , 'Blog updated' , 'success')
            dispatch(uiRemoveSetLoading())
        }

        } catch (error) {
            dispatch(uiRemoveSetLoading())
        }
    }
}

const getBlog = (blog) => ({
    type : types.blogGet,
    payload : blog
})
export const blogActive = (blog) => ({
    type : types.blogActive,
    payload : blog
})
const addBlog = (blog) => ({
    type : types.blogAdd,
    payload : blog
})
const deleteBlog = (blog) => ({
    type : types.blogDelete,
    payload : blog
})
export const activeBlog = (blog) => ({
    type: types.blogActive,
    payload : blog
})
const editBlog = (blog) => ({
    type : types.blogEdit,
    payload : blog
})
