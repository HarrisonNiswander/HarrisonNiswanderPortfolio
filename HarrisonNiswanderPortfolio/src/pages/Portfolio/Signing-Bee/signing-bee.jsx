import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./signing-bee_styles/signing-bee.css";
import Header from '../../../components/header/header.jsx';
import Footer from '../../../components/footer/footer.jsx';
import signingBeeLogo from '../../../images/portfolio-page/Signing-Bee/signingBeeLogo.png';
import signingBeeHome from '../../../images/portfolio-page/Signing-Bee/signingBeeHome.png';
import signingBeePlay from '../../../images/portfolio-page/Signing-Bee/signingBeePlay.png';
import signingBeeLogin from '../../../images/portfolio-page/Signing-Bee/signingBeeLogin.png';
import signingBeeASL from '../../../images/portfolio-page/Signing-Bee/signingBeeASLRef.png';
import signingBeeLogoSVG from '../../../images/portfolio-page/Signing-Bee/signing-bee-logo.svg';
import ImageCarousel from '../../../components/image-carousel/image-carousel.jsx';
import Steven from '../../../images/portfolio-page/Signing-Bee/creators/steven_picture.png';
import Harrison from '../../../images/portfolio-page/Signing-Bee/creators/harrison_picture.jpg';
import Ricardo from '../../../images/portfolio-page/Signing-Bee/creators/ricardo_picture.png';
import Zack from '../../../images/portfolio-page/Signing-Bee/creators/zack_picture.jpg';

const carouselImages = [
    { src: signingBeeLogo, description: 'Signing Bee Logo' },
    { src: signingBeeHome, description: 'Signing Bee Home Page' },
    { src: signingBeeASL, description: 'Signing Bee ASL Reference Page' },
    { src: signingBeePlay, description: 'Signing Bee Play Page' },
    { src: signingBeeLogin, description: 'Signing Bee Login Page' },
];

const signingBee = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/portfolio');
  };

  return (
    <div>
        <Header />

        <button className="back-button" onClick={handleClick}>Back</button>

        <div className="sb-title">
            <h1>Signing Bee</h1>
            <img src={signingBeeLogoSVG} width="50" height="50" />
        </div>

        <div className="carousel">
            <ImageCarousel images={carouselImages} interval={4000} />

        </div>

        <h2>About the Project</h2>

        <p>
            Signing Bee was made in Fall 2025 at Purdue University Fort Wayne as a semester-long 
            project for CS 347: Full-Stack Web Development. Signing Bee is a learning platform 
            designed to teach the basics of ASL spelling through an interactive game platform.

            <br/><br/>

            Signing Bee was made over the course of 16 weeks, starting with basic prototypes of the 
            gesture recognition system, constructing a website around that, and then connecting the 
            page to other server-side services keep the leaderboard. 
        </p>

        <h2>Tech Stack</h2>

        <ul>
            {/* List of technologies used in the project */}
            <li>Frontend: React, HTML, CSS</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: PostgreSQL on Supabase</li>
            <li>Testing: Cypress (E2E), Jest, Supertest</li>
            <li>CI/CD: GitHub Actions</li>
            <li>Hosting: Google Cloud platform</li>

            {/* PUT THIS IN TABLE */}
            {/* PUT THIS IN TABLE */}
            {/* PUT THIS IN TABLE */}
            {/* PUT THIS IN TABLE */}
            {/* PUT THIS IN TABLE */}
        </ul>

        <h2>Meet the Creators</h2>

        <div className="creators-container">
            
            <div className="creator-card">
                <img src={Harrison} alt="Harrison Niswander" height={200} width={200} className="creator-image"/>
                <h3 className="name">Harrison Niswander</h3>

            </div>

            <div className="creator-card">
                <img src={Ricardo} alt="Ricardo Saldana" height={200} width={200} className="creator-image"/>
                <h3 className="name">Ricardo Saldana</h3>

            </div>

            <div className="creator-card">
                <img src={Steven} alt="Steven LaGoy" height={200} width={200} className="creator-image"/>
                <h3 className="name">Steven LaGoy</h3>
                
            </div>

            <div className="creator-card">
                <img src={Zack} alt="Zachary McGill" height={200} width={200} className="creator-image"/>
                <h3 className="name">Zachary McGill</h3>
                
            </div>

        </div>

        <br/>

        <h2>Github Repository</h2>
        <p><a href="https://github.com/stevenlagoy/Signing-Bee">Signing Bee on GitHub</a></p>

        <Footer />
    </div>
    );

}

export default signingBee;