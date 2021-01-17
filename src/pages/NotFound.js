import React from 'react'
import { useHistory } from 'react-router-dom'

import '../css/not-found.css'

export const NotFound = () => {

    const history = useHistory()

    const handlenGoBack = () => {
        history.goBack()
    }

    return (
        <div className = 'cont-not-found'>
            <div>
                <img src = 'https://cdn.dribbble.com/users/1326793/screenshots/3516842/error404.jpg?compress=1&resize=800x600' alt = 'not found'/>
            </div>
            <div>
                <button onClick = {handlenGoBack}>Go back</button>
            </div>
        </div>
    )
}
