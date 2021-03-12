import axios from 'axios';
import { GET_USER, LOGIN, LOGOUT, REGISTER} from '../actionTypes/userTypes';

const initialState = 
{
    userData: {},
    loggedInUser: null,
    isLoggedIn: false,
    ratedBanters: []
}
export default function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            axios.post('https://localhost:44310/api/auth/login', action.payload, {withCredentials: true})
            return {...state, isLoggedIn: true}
        }
        case LOGOUT: {
            axios.post('https://localhost:44310/api/auth/logout', {withCredentials: true})
            return { initialState };
        }
        case REGISTER: {
            axios.post('https://localhost:44310/api/auth/register', action.payload, {withCredentials: true})
            return {...state, isLoggedIn: true}
        }
        case GET_USER:{
            return {...state, loggedInUser: action.payload}
        }
        default: {
            return state;
        }
    }
}