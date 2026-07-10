import { Link } from 'react-router-dom'
import '../css/NavBar.css'
import logo from '../assets/chatbubble.svg';

function NavBar(){
    return(
        <>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to="/">
                        <img src={logo} alt='chat-logo' className="logo-icon"/>
                    </Link>
                </div>

                <div className='links'>
                    <Link to="/" className='nav-links'>Home</Link>
                    <Link to="/profile" className='nav-links'>Profile</Link>
                </div>
            </nav>      
        </> 
    )
}

export default NavBar