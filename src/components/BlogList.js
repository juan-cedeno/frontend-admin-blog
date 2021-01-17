import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { activeBlog, startDeleteBlog } from '../action/blog'
import Fade from 'react-reveal/Fade';

export const BlogList = ({blogs}) => {

    const {url , name , author , _id} = blogs

    const history = useHistory()

    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.ui)

    const deleteBlog = () => {
        dispatch(startDeleteBlog(blogs , _id))
    }

    const editBlog = () => {
        dispatch(activeBlog(blogs))
        history.push(`/edit-blog/${_id}`)
    }


    return (
        <Fade>
        <div className = 'container blogs'>

         <div className = 'name-url-blog'>
                <a href = {url} target = '_blank' rel='noreferrer'>
                    <h3 className = 'blog-text'>{name}</h3>
                    <p>{author && author}</p>
                </a>
         </div>

         <div className = 'btn-blog'>

             <button 
             className = {`${loading ? 'disableBtn delete' : 'delete'}`}
             onClick = {deleteBlog}
             >Delete</button>

             <button 
             className = 'edit'
             onClick = {editBlog}
             >Edit</button>
         </div>
        </div>
        </Fade> 
    )
}
