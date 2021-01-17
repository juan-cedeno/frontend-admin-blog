import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Menu } from '../components/Menu'
import { AddBlogPage } from '../pages/AddBlogPage'
import { AddCoursePage } from '../pages/AddCoursePage'
import { BlogPage } from '../pages/BlogPage'
import {CoursePage} from '../pages/CoursePage'
import { EditCoursePage } from '../pages/EditCoursePage' 
import { EditBlogPage } from '../pages/EditBlogPage' 
import { NotFound } from '../pages/NotFound'
import { UserPage } from '../pages/UserPage'

export const DashboardRouter = () => {
    return (
        <div>
            <Menu/>
            <Switch>
                <Route exact path = '/' component = {CoursePage} ></Route>
                <Route exact path = '/user' component = {UserPage}></Route>
                <Route exact path = '/blog' component = {BlogPage}></Route>
                <Route exact path = '/add-course' component = {AddCoursePage} ></Route>
                <Route exact path = '/edit-course/:id' component = {EditCoursePage} ></Route>
                <Route exact path = '/add-blog' component = {AddBlogPage} ></Route>
                <Route exact path = '/edit-blog/:id' component = {EditBlogPage} ></Route>
                <Route exact path = '*' component = {NotFound} ></Route>
                <Redirect to = '/'/>
            </Switch>
        </div>
    )
}
