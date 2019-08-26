import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="fourofourpage">
            <center><h1>404</h1>
                <p>That's not a thing... Why don't you try <Link to="/">this</Link> instead?</p>
            </center>
        </div>
    )
}
export default NotFound;