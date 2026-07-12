import { useState } from 'react'
import '../css/AuthForm.css'
import { useNavigate, Link } from 'react-router-dom'

function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();

   async function handleSubmit(e) {
        e.preventDefault();
        
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok){
            localStorage.setItem('token', data.token);
            navigate('/welcome');
        } else {
            setError(data.error || 'Something went wrong. Please try again.')
        }
   }

   function ToSignUp(){
        navigate('/signup')
   }

    return(
        <>
        <div className="main">
            
            <h2>Login</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input id="username" 
                    placeholder="Username"
                    required
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className="form-group">
                    <input id="password"
                    placeholder="Password"
                    required
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <button type="submit" id="submitBtn">Log In</button>
                </div>
                
            </form>
            <Link to="/signup" className="auth-switch-link">To Sign Up</Link>            
           <div>
                {error &&<p className="error-message">{error}</p> } 
            </div> 
        </div> 
        </>
    )
}

export default LoginForm