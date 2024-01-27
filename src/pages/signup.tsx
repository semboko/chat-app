import './auth.css';

import { FaRegUser, FaUnlock } from 'react-icons/fa6';

export function SignUpPage(){
    return (
        <div className="auth-page">
            <div className="form-container">
                <header>Sign Up</header>
                <form>
                    <div className="text-input-container">
                        <input className="auth-text-input" type="text" placeholder='Username' required />
                        <label className="text-input-icon"><FaRegUser /></label>
                    </div>
                    <div className="text-input-container">
                        <input className="auth-text-input" type="password" placeholder='Password' required />
                        <label className="text-input-icon"><FaUnlock /></label>
                    </div>
                    <p>Already have an account? <a href="#">Sign In</a></p>
                    <button className="submit-button">Create Account</button>
                </form>
            </div>
        </div>
    )
}