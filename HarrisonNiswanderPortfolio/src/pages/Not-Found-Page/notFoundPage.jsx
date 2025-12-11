import "./not-found_styles/not-found.css";
import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Tai_Lung from '../../images/not-found-page/tai-lung.jpg';

function notFoundPage() {
    return (
        <div>
            <Header />

            <br/> {/* Break */}

            <main>
                <h1>404 - Page Not Found</h1>
                <p>
                    Sorry! The page you are looking for doesn't exit. 
                    Click <Link to="/home">Here</Link> to return back to the Home Page.
                </p>
                <img src={Tai_Lung} alt="Tai Lung" height={200} width={300} className="tai-lung"/>

            </main>

            <Footer />
            
        </div>
    );
}

export default notFoundPage;