import { useState } from 'react'
import '../css/Login.css'
import { useNavigate } from 'react-router-dom'

function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();

   async function handleSubmit(e) {
        e.preventDefault();
        
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok){
            navigate('/profile')
        } else {
            setError(data.error || 'Something went wrong. Please try again.')
        }
   }

    return(
        <>
        <div className="main">
            
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input id="username" 
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className="form-group">
                    <input id="password"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <button type="submit" id="submitBtn">Log In</button>
                </div>
            </form>
            
           <div>
                {error &&<p className="error-message">{error}</p> } 
            </div> 
        </div> 
        </>
    )
}

export default LoginForm