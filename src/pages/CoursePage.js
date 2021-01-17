import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { starGetCourse } from '../action/course'
import { Course } from '../components/Course'

export const CoursePage = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const {course} = useSelector(state => state.course)

    useEffect(() => {

       dispatch(starGetCourse())

    }, [dispatch])

    const handlenClickAddCourse = () => {
        history.push('/add-course')
    }

    return (
        <div className = ''>

                <h1 className = 'title'>Courses</h1>

            <div className = 'cont-btn-add-course'>
                <button 
                className = 'btn-add-course'
                onClick = {handlenClickAddCourse}
                >Add course</button>
            </div>

            <div className = 'container'>
                {
                    course.map(courseList => (
                        <Course courseList = {courseList} key = {courseList._id}/>
                        ))
                    }
            </div>
        </div>
    )
}
