import { useState } from "react"
import '../css/AuthForm.css'
import { useNavigate, Link } from "react-router-dom"

function SignUpForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        
        if (!username.trim() || !password.trim()){
            setError('All fields are required');
            return;
        }

        if (password !== confirmpassword){
            setError('Passwords do not match');
            return;
        }

        const response = await fetch('http://localhost:3000/api/signup', {
            method:'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })

        const data = await response.json();

        if (response.ok){
            navigate('/login')
        } else {
            setError(data.error || 'Something went wrong. Please try again.')
        }

    }

    function ToLogin(){
        navigate('/login')
    }

    return(
        <>
        <div className="main">
            
            <h2>Sign Up</h2>
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
                    <input id="confirmpassword"
                    placeholder="Confirm Your Password"
                    required
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <button type="submit" id="submitBtn">Sign Up</button>
                </div>
                
                </form>
                <Link to="/login" className="auth-switch-link">To Log In</Link>
                    <div>
                    {error &&<p className="error-message">{error}</p> } 
                    </div> 
        

            </div>
        </>
    )
}

export default SignUpForm