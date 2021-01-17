import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/login-register.css'
import {useDispatch, useSelector} from 'react-redux'
import { startLoginUser } from '../action/auth'

export const LoginPage = () => {

    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.auth)

    const [loginValue, setLoginValue] = useState({
        email : 'test@gmail.com',
        password : '123456'
    })

    const {email , password} = loginValue

    const handlenChangeLogin = (e) => {
        setLoginValue({
            ...loginValue,
            [e.target.name]:e.target.value
        })
    }

    const handlenSubmitUser = async (e) => {
        e.preventDefault()
        dispatch(startLoginUser(email , password))
    }

    return (
        <div className = 'cont-login-register'>
        <div>
            <h2 className = 'text-ref-login'>Sign In to Admin-Blog-App</h2>
        </div>
        <div>
            <form className = 'form-input' onSubmit = {handlenSubmitUser}>
                <label>Email</label>
                <input
                type = 'email'
                name = 'email'
                autoComplete = 'off'
                value = {email}
                onChange = {handlenChangeLogin}
                />

               <label>Password</label>
                <input
                type = 'password'
                name = 'password'
                autoComplete = 'off'
                value = {password}
                onChange = {handlenChangeLogin}
                />
                
                <div className = 'cont-btn-login-register'>

                     <button
                     disabled = {loading}
                     className = {`${loading && 'disableBtn'}`}
                     >{loading ? 
                     'Loading' : 'Log in'}</button>

                     <Link to = '/auth/register'>Register</Link>
                </div>
            </form>
        </div>
        </div>
    )
}
