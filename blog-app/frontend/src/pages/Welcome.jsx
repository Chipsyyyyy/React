import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Welcome() {
    const [username, setUsername] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/login');
            return;
        }

        fetch('http://localhost:3000/api/welcome', {
            headers: {'Authorization': `Bearer ${token}`}
        })
        .then(res => {
            if (!res.ok){
                navigate('/login');
                return;
            }
            return res.json();
        })
        .then(data => {
            if (data){
                setUsername(data.username);
            }
        });
    }, []);


    return (
    <>
        <h2>Welcome, {username}</h2>
    </>
  )
}

export default Welcome