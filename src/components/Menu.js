import React from 'react'
import { Link } from 'react-router-dom'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import { useDispatch } from 'react-redux'
import { startLogout } from '../action/auth'

import '../css/menu.css'

export const Menu = () => {

    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(startLogout())
    }

    return (
        <div className = 'cont-menu'>
            <header>
                <Link to= '/'>Course</Link>
                <Link to= '/user'>Users</Link>
                <Link to= '/blog'>Blog</Link>
            </header>

            <div className = 'social'>
                <a href = 'https://github.com/juan-cedeno' target = '_blank' rel = 'noreferrer'>
                    <img src = {github} alt = 'github'/>
                </a>
                <a href = 'https://www.linkedin.com/in/juan-cede%C3%B1o-660a47196/' target = '_blank' rel = 'noreferrer'>
                    <img src = {linkedin} alt = 'linkedin'/>
                </a>

            </div>
            <button 
            className = 'logout'
            onClick = {logOut}
            >Logout</button>
        </div>
    )
}
