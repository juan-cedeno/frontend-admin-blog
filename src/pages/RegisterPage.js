import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRegisterUser } from '../action/auth'
import { notificationMessage } from '../helpers/notification-message'



export const RegisterPage = () => {

    const [valueRegister, setValueRegister] = useState({
        name : '',
        email : '',
        password : '',
        passwordRepeat : ''
    })

    const dispatch = useDispatch()
    const {loading}  = useSelector(state => state.auth)

    const {email , name , password , passwordRepeat}  = valueRegister

    const handlenChangeRegister = (e) => {
        setValueRegister({
            ...valueRegister,
            [e.target.name]:e.target.value
        })
    } 

    const handlenSubmitRegister = async (e) => {
        e.preventDefault()

        if (password !== passwordRepeat) {
            return notificationMessage('Error' , 'Password no match' , 'danger')
        }
        dispatch(startRegisterUser(name , email , password))

    }

    return (
        <div className = 'cont-login-register'>
           <div>
               <h2 className = 'text-ref-login'>Sign up to Admin-Blog-App</h2>
               <br/>
           </div>
           <div>
               <form onSubmit = {handlenSubmitRegister} className = 'form-input'>
                   <label>Name</label>
                   <input
                   type = 'text'
                   name = 'name'
                   autoComplete = 'off'
                   value = {name}
                   onChange = {handlenChangeRegister}
                   />

                   <label>Email</label>
                   <input
                   type = 'email'
                   name = 'email'
                   autoComplete = 'off'
                   value = {email}
                   onChange = {handlenChangeRegister}
                   />

                  <label>Password</label>
                   <input
                   type = 'password'
                   name = 'password'
                   autoComplete = 'off'
                   value = {password}
                   onChange = {handlenChangeRegister}
                   />
                   <label>Repeat password</label>
                   <input
                   type = 'password'
                   name = 'passwordRepeat'
                   autoComplete = 'off'
                   value = {passwordRepeat}
                   onChange = {handlenChangeRegister}
                   />
                   <div className = 'cont-btn-login-register'>
                   <button
                        disabled = {loading}
                        className = {`${loading && 'disableBtn'}`}
                        >{loading ? 
                        'Loading' : 'Register'}</button>

                        <Link to = '/auth/login'>Sign In</Link>
                   </div>
               </form>
           </div>
           
        </div>
    )
}
