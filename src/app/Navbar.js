 import { Link } from 'react-router-dom';
 
 const  Navbar=() =>{
    return(
        <div>
        <h1 className='header'>Redux Essentials</h1>
        <div className="navContent">
            <div className="navLinks">
                <Link to="/">Back to Posts</Link>
            </div>
        </div>
        </div>
    );
}

export default Navbar;