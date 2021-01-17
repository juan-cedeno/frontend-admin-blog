
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAddBlog } from '../action/blog'

export const AddBlogPage = () => {

    const [inputValue, setInputValue] = useState({
        name : '',
        url : '',
        author : ''
    })

    const {name , url , author} = inputValue
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.ui)

    const handlenChangeValue = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]:e.target.value
        })
    }

    const handlenSubmitBlog = (e) => {
        e.preventDefault()
        dispatch(startAddBlog(inputValue))

        setInputValue ({
            name : '',
            url : '',
            author : ''
        })
    }

    return (
        <>
          <div className = 'add-course'>
              <div>
                  <h1 className = 'title'>Add blog</h1>
              </div>
              <div>
                  <form className = 'form-input' onSubmit = {handlenSubmitBlog}> 
                      <label>Name</label>
                      <input
                      type = 'text'
                      name = 'name'
                      value = {name}
                      placeholder = 'Name'
                      autoComplete = 'off'
                      onChange = {handlenChangeValue}
                      />

`                   <label>Url</label>
                      <input
                      type = 'text'
                      name = 'url'
                      value = {url}
                      placeholder = 'Url'
                      autoComplete = 'off'
                      onChange = {handlenChangeValue}
                      />
                      <label>Author</label>
                      <input
                      type = 'text'
                      name = 'author'
                      value = {author}
                      placeholder = 'Author'
                      autoComplete = 'off'
                      onChange = {handlenChangeValue}
                      />

                      <button 
                    className = {`${loading ? 'disableBtn btn-add-course-page ' : 'btn-add-course-page'}`}
                    disabled = {loading}
                    >Add blog</button>
                  </form>
              </div>
          </div>  
        </>
    )
}
