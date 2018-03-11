import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <div>
            HomePage<br/>
            <Link to="/login">Login</Link>
            {" "}
            <Link to="/signup">Signup</Link>
        </div>
    );
}
 
export default HomePage;