

const BASE_URL = process.env.REACT_APP_URL_API
export const fechSinToken = (endPoint , data , method = 'GET') => {

    const url = `${BASE_URL}/${endPoint}`


    if(method === 'GET') {
        return fetch(url)
    }else {
        return fetch(url , {
            method,
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
    }

}
export const fechConToken = (endPoint , data , method = 'GET') => {

    const url = `${BASE_URL}/${endPoint}`
    const token = localStorage.getItem('TOKEN') || ''

    if(method === 'GET') {
        return fetch(url , {
            method,
            headers : {
                'x-token' : token
            },
        })
    }else {
        return fetch(url , {
            method,
            headers : {
                'Content-Type' : 'application/json',
                'x-token' : token
            },
            body : JSON.stringify(data)
        })
    }

}