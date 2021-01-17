import React from 'react'
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../action/ui'

export const BtnFloat = () => {

    const dispatch = useDispatch()
    
    const addUser = () => {
        dispatch(uiOpenModal())
    }


    return (

    <div className = 'btn-floting'>
        <button
        onClick = {addUser}
        ><i className="fas fa-user-plus"></i>
        </button>
    </div>
    )
}
