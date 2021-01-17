import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetUser } from '../action/user'
import '../css/user-blog.css'
import { BtnFloat } from './BtnFloat'
import { ModalUser } from './ModalUser'

import { Users } from './Users'

export const UserList = () => {

    const dispatch = useDispatch()

    const {user} = useSelector(state => state.user)
    const {openModal} = useSelector(state => state.ui)

    useEffect(() => {
        dispatch(startGetUser())
    }, [ dispatch , openModal])

    
    return (
        <div className = 'cont-user'>

            <BtnFloat/>
            <h1 className = 'title'>Users</h1>

            <div className = 'users'>

                {
                user.map(userBlogs => (
                    
                    <Users userBlogs = {userBlogs} key = {userBlogs._id}/>

                ))
                }

            </div>

            <ModalUser/>
        </div>
    )
}
