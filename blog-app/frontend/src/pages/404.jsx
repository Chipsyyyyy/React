import NavBar from "../components/NavBar"
import '../css/404.css'

function NotFound(){    
    return(
        <>
            <NavBar/>
            <div className="main">
                <h1 className="error">Error 404</h1>
            <p className="message">This resource does not exist</p>
            </div>
            
        </>
    )
}

export default NotFound