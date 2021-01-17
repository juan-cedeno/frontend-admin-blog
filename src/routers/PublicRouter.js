import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PublicRouter = ({
    isAuthenticate,
    component : Component,
    ...rest
}) => {
    return (
      <Route {...rest}
      
      component = {(props) => (
          (isAuthenticate) 
          ? <Redirect to = '/'/> 
          : <Component {...props}/>
      )}
      
      />
    )
}
