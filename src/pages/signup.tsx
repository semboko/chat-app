import './auth.css';

import axios, { AxiosResponse } from 'axios';
import { SyntheticEvent, useState } from 'react';
import { FaRegUser, FaUnlock } from 'react-icons/fa6';
import { Link, Navigate } from 'react-router-dom';

export function SignUpPage(){

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [submitted, setSubmitted] = useState<boolean>(false)

    const signup = (e: SyntheticEvent) => {
        e.preventDefault()
        axios.request({
            "method": "post",
            "url": "/auth/signup",
            "baseURL": "http://localhost:3000",
            "data": {
                "username": username,
                "password": password,
            }
        }).then((res: AxiosResponse) => {
            console.log(res)
            setSubmitted(true)
        })
    }


    return (
        submitted ? <Navigate to={"/signin?username=" + username} /> :
        <div className="auth-page">
            <div className="form-container">
                <header>Sign Up</header>
                <form>
                    <div className="text-input-container">
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            className="auth-text-input" 
                            type="text"
                            placeholder='Username' 
                            required />
                        <label className="text-input-icon"><FaRegUser /></label>
                    </div>
                    <div className="text-input-container">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="auth-text-input" 
                            type="password" 
                            placeholder='Password' 
                            required />
                        <label className="text-input-icon"><FaUnlock /></label>
                    </div>
                    <p>Already have an account? <Link to="/signin">Sign In</Link></p>
                    <button
                        disabled={username === "" || password === ""}
                        onClick={signup}
                        className="submit-button">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    )
}