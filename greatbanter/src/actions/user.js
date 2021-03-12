import {LOGIN, LOGOUT, REGISTER, GET_USER} from '../actionTypes/userTypes';

export function login(credentials)
{
    return{
        type: LOGIN,
        payload: credentials
    }
}
export function logout()
{
    return{
        type: LOGOUT
    }
}
export function register(userInfo)
{  
    return{
        type: REGISTER,
        payload: userInfo
    }
}
export function getUser(currentUser)
{
    return{
        type: GET_USER,
        payload: currentUser
    }
}