import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { startEditCourse } from '../action/course'

export const EditCoursePage = () => {

    const [inputValueEditCourse, setInputValueEditCourse] = useState({
        name : '',
        image : '',
        price : '',
        difficulty : '',
        link : ''
    })

    const {difficulty ,name , image , price , link} = inputValueEditCourse

    const {courseActive} = useSelector(state => state.course)
    const {loading} = useSelector(state => state.ui)
    const dispatch = useDispatch()

    const handlenChangeValue = (e) => {

        setInputValueEditCourse({
            ...inputValueEditCourse,
            [e.target.name]:e.target.value
        })
    }

    
    useEffect(() => {
        
        if (courseActive) {
            setInputValueEditCourse(courseActive)
        }
        
    }, [courseActive])

    if (!courseActive) {
        return <Redirect to = '/course'/>
    }
    
    const handlenClickEdit = (e) => {
        e.preventDefault()

        dispatch(startEditCourse(inputValueEditCourse))

        setInputValueEditCourse({
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
                <h1 className = 'title'>Edit Course</h1>
            </div>
            <div>
                <form className = 'form-input' onSubmit = {handlenClickEdit}>
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
                    >Edit course</button>
                </form>
            </div>
        </div>
    )
}
