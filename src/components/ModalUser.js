import React from 'react'
import Modal from 'react-modal';
import { customStyles } from '../helpers/modal-config';
import '../css/modal.css'
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal, uiSetMessage, uiSetRemoveMessage } from '../action/ui';
import { useState } from 'react';
import {startCreateUserBlog} from '../action/user';

Modal.setAppElement('#root')

export const ModalUser = () => {

  const [valueNewUser, setValueNewUser] = useState({
    name : '',
    email : '',
    password : '',
    repeatPassword : ''
  })

  const {name , email , password , repeatPassword} = valueNewUser
  const {openModal , message} = useSelector(state => state.ui)

  const dispatch = useDispatch()

  const handlenChangeNewUser = (e) => {
    setValueNewUser({
      ...valueNewUser,
      [e.target.name]:e.target.value
    })
  }
  
  const handlenClickNewUser = (e) => {
    e.preventDefault()

    if (password !== repeatPassword) {
        return dispatch(uiSetMessage('Password not match'))
    }

    dispatch(startCreateUserBlog(name , email , password))

    setValueNewUser({
      name : '',
      email : '',
      password : '',
      repeatPassword : ''
    })
    
    dispatch(uiSetRemoveMessage())
    
  }
  const closelModal = () => {
    dispatch(uiCloseModal())

    dispatch(uiSetRemoveMessage())

    setValueNewUser({
      name : '',
      email : '',
      password : '',
      repeatPassword : ''
    })

  }

    return (
        <div>
        <Modal
          isOpen={openModal}
          onRequestClose={closelModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <div>
            <h2 className ='letter-modal'>Create new user</h2>
                <p className = 'error'>{message}</p>
          </div>

          <div>
          <form 
          className = 'form-new-user'
          onSubmit = {handlenClickNewUser}
          >
            <label>Name</label>
            <input 
            type = 'text'
            name = 'name'
            autoComplete = 'off'
            placeholder = 'Name'
            value = {name}
            onChange = {handlenChangeNewUser}
            />

            <label>Email</label>
            <input 
            type = 'email'
            name = 'email'
            autoComplete = 'off'
            placeholder = 'Email'
            value = {email}
            onChange = {handlenChangeNewUser}
            />

            <label>Password</label>
            <input 
            type = 'password'
            name = 'password'
            autoComplete = 'off'
            placeholder = 'Password'
            value = {password}
            onChange = {handlenChangeNewUser}
            />
            <label>Repeat password</label>
            <input 
            type = 'password'
            name = 'repeatPassword'
            autoComplete = 'off'
            placeholder = 'Repeat password'
            value = {repeatPassword}
            onChange = {handlenChangeNewUser}
            />

          <div className = 'btn-new-user-modal'>
            <button type = 'submit'>Add user</button>
          </div>
          </form>
          </div>

        </Modal>
        </div>
    )
}
