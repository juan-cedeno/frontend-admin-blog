import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAddCourse} from '../action/course'

import '../css/add-course.css'

export const AddCoursePage = () => {

    const [inputValueAddCourse, setInputValueAddCourse] = useState({
        name : '',
        image : '',
        price : '',
        difficulty : '',
        link : ''
    })

    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.ui)
    
    const {difficulty ,name , image , price , link} = inputValueAddCourse

    const handlenChangeValue = (e) => {

        setInputValueAddCourse({
            ...inputValueAddCourse,
            [e.target.name]:e.target.value
        })
    }
    
    const handlenSubmitAddCourse = (e) => {
        e.preventDefault()
        
        dispatch(startAddCourse(inputValueAddCourse))

        setInputValueAddCourse({
            name : '',
            image : '',
            price : '',
            difficulty : '',
            link : ''
        })
    }
    
    return (
        <div className = 'add-course'>
            <div>
                <h1 className = 'title'>Add new Course</h1>
            </div>
            <div>
                <form className = 'form-input' onSubmit = {handlenSubmitAddCourse}>
                    <label>Name</label>
                    <input
                    type = 'text'
                    name = 'name'
                    value = {name}
                    placeholder = 'Name'
                    autoComplete = 'off'
                    onChange = {handlenChangeValue}
                    />
                    <label>Image</label>
                    <input
                    type = 'text'
                    name = 'image'
                    value = {image}
                    autoComplete = 'off'
                    placeholder = 'Image URL'
                    onChange = {handlenChangeValue}
                    />
                    <label>Price</label>
                    <input
                    type = 'number'
                    name = 'price'
                    value = {price}
                    placeholder = 'Price'
                    autoComplete = 'off'
                    onChange = {handlenChangeValue}
                    />
                    <label>Difficulty</label>
                    <input
                    type = 'text'
                    name = 'difficulty'
                    value = {difficulty}
                    placeholder = 'Difficulty'
                    autoComplete = 'off'
                    onChange = {handlenChangeValue}
                    />
                    <label>Link</label>
                    <input
                    type = 'text'
                    name = 'link'
                    value = {link}
                    placeholder = 'Link'
                    autoComplete = 'off'
                    onChange = {handlenChangeValue}
                    
                    />
                    <button 
                    className = {`${loading ? 'disableBtn btn-add-course-page ' : 'btn-add-course-page'}`}
                    disabled = {loading}
                    >Create course</button>
                </form>
            </div>
        </div>
    )
}
