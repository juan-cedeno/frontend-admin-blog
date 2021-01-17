import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { startEditBlog } from '../action/blog'

export const EditBlogPage = () => {

  const [inputValue, setInputValue] = useState({
    name : '',
    url : '',
    author : ''
  })

  const {name , url , author} = inputValue
  const {ActiveBlog} = useSelector(state => state.blog)
  const {loading} = useSelector(state => state.ui)
  const dispatch = useDispatch()

  const handlenChangeValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]:e.target.value
    })
  }

  useEffect(() => {
    if (ActiveBlog) {
      setInputValue(ActiveBlog)
    }
  }, [ActiveBlog])

  if (!ActiveBlog) {
    return <Redirect to = '/blog'/>
  }

  const handlenClickBlog = (e) => {
    e.preventDefault()
    dispatch(startEditBlog(inputValue))
    setInputValue({
      name : '',
      url : '',
      author : ''
    })
  }

    return (
        <>
            <div className = 'add-course'>
              <div>
                  <h1 className = 'title'>Edit blog</h1>
              </div>

              <div>
                  <form className = 'form-input' onSubmit = {handlenClickBlog}> 
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
                    >Edit blog</button>
                  </form>
              </div>
          </div>  
        </>
    )
}
