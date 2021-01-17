import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router , Redirect, Switch} from 'react-router-dom'
import { starRenewToken } from '../action/auth'
import { Loading } from '../components/Loading'
import { AuthRouter } from './AuthRouter'
import { DashboardRouter } from './DashboardRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {

    const dispatch = useDispatch()

    const {cheking , id} = useSelector(state => state.auth)

    useEffect(() => {
     
        dispatch(starRenewToken())

    }, [dispatch])

    if (cheking) {
        return <Loading/>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter isAuthenticate = {!!id} path = '/auth' component = {AuthRouter}/>
                    <PrivateRouter isAuthenticate = {!!id} path = '/' component = {DashboardRouter}/>
                    <Redirect to = '/'/>
                </Switch>
            </div>
        </Router>
    )
}
