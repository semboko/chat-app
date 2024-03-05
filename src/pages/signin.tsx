import './auth.css';

import axios from 'axios';
import { SyntheticEvent, useEffect, useState } from 'react';
import { FaRegUser, FaUnlock } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

export function SignInPage(){

    const [username, setUsename] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const queryUsername = params.get("username")
        if(queryUsername !== null){
            setUsename(queryUsername)
        }
    }, [setUsename])

    const submit = (e: SyntheticEvent) => {
        e.preventDefault()
        setIsLoading(true)
        axios.request({
            method: "post",
            url: "/auth/signin",
            baseURL: window.location.origin,
            data: {
                "username": username,
                "password": password,
            }
        }).then((res) => {
            localStorage.setItem("token", res.data.token)
            navigate("/chat")
        }).catch((err) => {
            setIsLoading(false)
        })
    }

    return (
        <div className="auth-page">
            <div className="form-container">
                <header>Sign In</header>
                <form>
                    <div className="text-input-container">
                        <input value={username} onChange={(e) => setUsename(e.target.value)} className="auth-text-input" type="text" placeholder='Username' required />
                        <label className="text-input-icon"><FaRegUser /></label>
                    </div>
                    <div className="text-input-container">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className="auth-text-input" type="password" placeholder='Password' required />
                        <label className="text-input-icon"><FaUnlock /></label>
                    </div>
                    <p>Do not have an account? <Link to="/signup">Sign Up</Link></p>
                    <button 
                        disabled={username === "" || password === "" || isLoading} 
                        onClick={submit} 
                        className="submit-button">
                        {isLoading ? "Loading..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    )
}