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
import signingBeeLinkLogo from '../../../images/portfolio-page/Signing-Bee/sbLinkLogo.png';
import ImageCarousel from '../../../components/image-carousel/image-carousel.jsx';
import githubBlack from '../../../images/portfolio-page/Signing-Bee/githubBlack.png';
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

        <br/>

        <div className="carousel">
            <ImageCarousel images={carouselImages} interval={4000} />

        </div>

        <br/>

        <div className="sb-about">
            <h2>About the Project</h2>

            <p>
                Signing Bee was made in Fall 2025 at Purdue University Fort Wayne as a semester-long 
                project for CS 347: Full-Stack Web Development. Signing Bee is a learning platform 
                designed to teach the basics of ASL spelling through an interactive game platform.

                <br/><br/>

                Signing Bee was made over the course of 16 weeks, starting with basic prototypes of the 
                gesture recognition system, constructing a website around that, and then connecting the 
                page to other server-side services to keep the leaderboard. 
            </p>

        </div>

        <br/><br/>

        <div className="tech-stack">
            <h2>Tech Stack</h2>
        
            {/* List of technologies used in the project */}
            <table className="tech-table">
                <tr>
                    <td className="tech">Frontend</td>
                    <td className="used">React, HTML,  & CSS</td>
                </tr>

                <tr>
                    <td className="tech">Backend</td>
                    <td className="used">Node.js & Express.js</td>
                </tr>

                <tr>
                    <td className="tech">Database</td>
                    <td className="used">PostgreSQL on Supabase</td>
                </tr>

                <tr>
                    <td className="tech">Testing</td>
                    <td className="used">Cypress (E2E), Jest, & Supertest</td>
                </tr>

                <tr>
                    <td className="tech">CI/CD</td>
                    <td className="used">Github Actions</td>
                </tr>

                <tr>
                    <td className="tech">Hosting</td>
                    <td className="used">Google Cloud Platform</td>
                </tr>

            </table>
        </div>

        <br/><br/>

        <div className="creators-background">
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
        </div>

        <br/><br/>

        <div className="github">
            <h2>Github Repository</h2>
            <img src={githubBlack} alt="GitHub Logo" height={150} width={400} className="github-logo"
                onClick={() => window.open("https://github.com/stevenlagoy/Signing-Bee", "_blank")}
            />
        </div>

        <br/><br/>
        
        <div className="sb-link">
            <h2>Visit the Site</h2>
            <img src={signingBeeLinkLogo} alt="Link Logo" height={150} width={300} className="link-logo"
                onClick={() => window.open("https://signingbee.xyz", "_blank")}
            />

        </div>
        
        <br/>

        <Footer />
    </div>
    );

}

export default signingBee;