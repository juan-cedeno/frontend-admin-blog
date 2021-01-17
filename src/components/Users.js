import React from 'react'
import { useDispatch } from 'react-redux'
import { startDeleteUser} from '../action/user'

import Fade from 'react-reveal/Fade';

export const Users = ({userBlogs}) => {

    const {name , email , avatar , _id } = userBlogs

    const dispatch = useDispatch()

    const handlenDeleteUser = () => {
        dispatch(startDeleteUser(userBlogs , _id))
    }


    return (
    <Fade>
    <div className = 'user-list-cont'>
        <div className = 'cont-img-list-user'>
            <img src = {avatar} alt = {name}/>
        </div>

        <div className = 'cont-email-user'>
                <h4 className = 'name-user-list active'>{name}</h4>
                <p className = 'email-user-list active'>{email}</p>
        </div>
        
        <div className = 'btn-users'>

            <button 
            className = 'delete-user'
            onClick = {handlenDeleteUser}
            >
            <i className="fas fa-trash-alt"></i>
            </button>

        </div>

    </div>
    </Fade>
    )
}
