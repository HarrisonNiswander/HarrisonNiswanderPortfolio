import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';

function notFoundPage() {
    return (
        <div>
            <Header />

            <h1>404 - Page Not Found</h1>
            <p>
                Sorry! The Page you are Looking for doesn't exit. 
                Click <Link to="/home">Here</Link> to return back to the Home Page.
            </p>

            <Footer />
            
        </div>
    );
}

export default notFoundPage;