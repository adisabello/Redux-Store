
export const logIn = (token) =>{
    return {
        type: 'LOGIN',
        payload: token
    }
}

export const logOut = () =>{
    return {
        type: 'LOGOUT',
    }
}