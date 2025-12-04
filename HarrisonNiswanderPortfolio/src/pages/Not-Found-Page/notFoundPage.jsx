import { Link } from 'react-router-dom';
import React from 'react';

function notFoundPage() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>
                Sorry! The Page you are Looking for doesn't exit. 
                Click <Link to="/home">Here</Link> to return back to the Home Page.
            </p>
            
        </div>
    );
}

export default notFoundPage;