
import { fechConToken } from "../services/fechSinToken"
import { types } from "../types/types"
import { uiSetMessage } from "./ui"


export const startGetUser = () => {
    return async (dispatch) => {

        try {
            const body = await fechConToken('user-blog')
            const resp = await body.json()

            if (resp.ok) {
                dispatch(getUser(resp.user))
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const startCreateUserBlog = (name , email , password) => {
 
    return async (dispatch) => {
        try {
            const body = await fechConToken('user-blog' , {name , email , password} , 'POST')
            const resp = await body.json()

            if(resp.ok) {
                dispatch(createUserBlog({
                    id : resp.id,
                    name : resp.name
                }))
            }else{
                return dispatch(uiSetMessage(resp.message))
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const startDeleteUser = (user , id) => {
    return async (dispatch) => {

        try {
            const body = await fechConToken(`user-blog/${id}` , user , 'DELETE')
            const resp = await body.json()

            if (resp.ok) {
                dispatch(deleteUser(user))
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}
const getUser = (user) => ({
    type : types.getUser,
    payload : user
})
const createUserBlog = (user) => ({
    type : types.createUser,
    payload : user
})
const deleteUser = (user) => ({
    type : types.deleteUser,
    payload : user
})

