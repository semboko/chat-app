import './auth.css';

export function SignUpPage(){
    return (
        <div className="form-container">
            <header>Sign Up</header>
            <form>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <p>Already have an account? <a href="#">Sign In</a></p>
                <button>Submit</button>
            </form>
        </div>
    )
}