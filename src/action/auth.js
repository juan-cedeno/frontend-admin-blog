import { notificationMessage } from "../helpers/notification-message"
import { fechConToken, fechSinToken } from "../services/fechSinToken"
import {types} from '../types/types'


export const startLoginUser = (email , password) => {

    return async (dispatch) => {
        
        try {
            
        dispatch(setLoading())
            
        const body = await fechSinToken('login' , {email , password} , 'POST')
        const resp = await body.json()
        
        if (resp.ok) {
            notificationMessage('Success' , `Welcome ${resp.name}` , 'success')
            localStorage.setItem('TOKEN' , resp.token)
            dispatch( login ({
                id : resp.id,
                name : resp.name
            }))
            dispatch(removeSetLoading())
        }else {
            notificationMessage('Error' , resp.message , 'danger')
            dispatch(removeSetLoading())
        }

        } catch (error) {
            dispatch(removeSetLoading())
            console.log(error);
        }
        
    }
} 

export const startRegisterUser = (name , email , password) => {
    
    return async (dispatch) => {
        try {

            dispatch(setLoading())

            const body = await fechSinToken('register' , {name , email , password} , 'POST')
            const resp = await body.json()

            if (resp.ok) {
                localStorage.setItem('TOKEN' , resp.token)
                notificationMessage('Succes' , `Welcome ${resp.name}` ,'success')

                dispatch(login({
                    id : resp.id,
                    name : resp.name,
                }))

                dispatch(removeSetLoading())

            }else {
                notificationMessage('Error' , resp.message , 'danger')
                dispatch(removeSetLoading())
            }

        } catch (error) {
            console.log(error);
            dispatch(removeSetLoading())
        }
    }
}

export const starRenewToken = () => {
    return async (dispatch) => {

        const body = await fechConToken('renew')
        const resp = await body.json()

        if(resp.ok) {
            localStorage.setItem('TOKEN' , resp.token)

            dispatch(login({
                id : resp.id,
                name : resp.name
            }))
            
        } else {
            dispatch(renewToken())
        }
    }
}

export const startLogout = () => {

    return (dispatch) => {
        localStorage.clear()
        dispatch(logout())
    }
}

const logout = () => ({type : types.logAuth})

const login = (user) => ({
    type : types.authUser,
    payload : user
})

const renewToken = () => ({type : types.renewToken})
const setLoading = () => ({type : types.setLoading})
const removeSetLoading = () => ({type : types.removeSetLoading})