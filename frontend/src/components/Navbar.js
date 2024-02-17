import {Link} from "react-router-dom"
import "../index.css"
// the Link to "/" is referring to home page
const Navbar=() => {
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h2>Workout List 🏋️‍♀️</h2>
                    
                    
                </Link>
                
                    
                    
                
                    
                    
                
            </div>
            
           
        </header>
    )
}

export default Navbar