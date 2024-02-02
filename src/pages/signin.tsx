import './auth.css';

import { FaRegUser, FaUnlock } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export function SignInPage(){
    return (
        <div className="auth-page">
            <div className="form-container">
                <header>Sign In</header>
                <form>
                    <div className="text-input-container">
                        <input className="auth-text-input" type="text" placeholder='Username' required />
                        <label className="text-input-icon"><FaRegUser /></label>
                    </div>
                    <div className="text-input-container">
                        <input className="auth-text-input" type="password" placeholder='Password' required />
                        <label className="text-input-icon"><FaUnlock /></label>
                    </div>
                    <p>Do not have an account? <Link to="/signup">Sign Up</Link></p>
                    <button className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    )
}