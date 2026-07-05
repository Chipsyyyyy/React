import { useState } from 'react'
import '../css/Login.css'

function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
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
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <button type="submit" id="submitBtn">Log In</button>
                </div>
            </form>
            </div>
        </>
    )
}

export default LoginForm