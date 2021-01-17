import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useHistory} from 'react-router-dom'
import { startGetBlog } from '../action/blog'
import { BlogList } from '../components/BlogList'

import '../css/blog.css'


export const BlogPage = () => {

    const dispatch = useDispatch()
    const {blog} = useSelector(state => state.blog)

    const history = useHistory()
    
    useEffect(() => {

        dispatch(startGetBlog())

    }, [dispatch])

    const handlenClickAdd = () => {
        history.push('/add-blog')
    }
    
    return (
        <>
            <div>
                <h1 className = 'title'>Blog</h1>
                <div className ='btn-blog-add'>
                    <button 
                    className = 'btn-add-course'
                    onClick = {handlenClickAdd}
                    >Add blog</button>
                </div>

                <div>
                    {
                        blog.map(blogs => (
                            <BlogList blogs = {blogs} key = {blogs._id}/>
                        ))
                    }
                </div>

                <div>
                    {
                        blog.length === 0 && <h1 className = 'no'>No blogs</h1>
                    }
                </div>    
            </div>
        </>
    )
}
