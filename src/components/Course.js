import React from 'react'
import i18js from 'i18n-js'
import { useDispatch, useSelector} from 'react-redux'
import { startCourseActive, startDeleteCourse } from '../action/course'
import { useHistory } from 'react-router-dom'

import Fade from 'react-reveal/Fade';
import '../css/course.css'

export const Course = ({courseList}) => {
    
    const {image , difficulty , link , name , price , _id} = courseList
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.ui)
    const history = useHistory()

    const handlenDelete = () => {
        dispatch(startDeleteCourse(courseList , _id ))
    }

    const handlenEdit = () => {
        dispatch( startCourseActive(courseList))
        history.push(`/edit-course/${_id}`)
    }

    return (
        <>  <Fade>
            <div className = 'course'>

                <div className = 'cont-img-course'>
                    {
                        image ? <img src = {image} alt = {name}/> 
                        : <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png' alt='noimage'/>
                    }
                </div>
                
                <div className = 'letter-course'>
                    <p>{name}</p>
                    <p>{i18js.toCurrency (price)}</p>
                    <p>{difficulty}</p>
                    <a href = {link} target = '_blank' rel='noreferrer' >Visit</a>
                </div>


                <div className = 'cont-btn-course'>
                    <button 
                    className = {`${loading ? 'disableBtn delete' : 'delete'}`}
                    onClick = {handlenDelete}
                    disabled = {loading}
                    >Delete</button>

                    <button 
                    className = 'edit'
                    onClick = {handlenEdit}
                    >Edit</button>
                </div>
            </div>
        </Fade>
        </>
    )
}
