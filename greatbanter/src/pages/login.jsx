import React, {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { login } from '../actions/user';

export default function Login() {
    const dispatch = useDispatch()
    const [loginData, setLoginData] = useState({
        username:"",
        password:""
    });
    function onLoginDataChange(e) {
        const { name, value } = e.target
        setLoginData({...loginData, [name]:value })
    }
    function onLoginClick() {
        if(loginData.username != "" && loginData.password != "") {
            dispatch(login(loginData))
            //axios.post('https://localhost:44310/api/auth/login', {username: loginData.username, password: loginData.password})
        }
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-4 form-background">
                <label className="col-12 mt-2 text-light text-center font-weight-bold">LOGIN</label>
                    <div className="col-12 form-group">
                        <label htmlFor="inputUsername text-white">username</label>
                        <input onChange={(e) => onLoginDataChange(e)} type="username" className="form-control shadow-none rounded-0 border-0" id="inputUsername" aria-describedby="usernameHelp" name="username"></input>
                    </div>
                    <div className="col-12  form-group">
                        <label htmlFor="inputPassword text-white">password</label>
                        <input onChange={(e) => onLoginDataChange(e)} type="password" className="form-control shadow-none rounded-0 border-0" id="inputPassword" aria-describedby="passwordHelp" name="password"></input>
                    </div>
                    <button onClick={()=> onLoginClick()} className="text-right mr-3 mb-3 login-btn text-light">login</button>
                </div>     
            </div>
        </div>
    )
}
