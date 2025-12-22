import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./signing-bee_styles/signing-bee.css";
import Header from '../../../components/header/header.jsx';
import Footer from '../../../components/footer/footer.jsx';
import signingBeeLogo from '../../../images/portfolio-page/Signing-Bee/signingBeeLogo.png';
import signingBeeHome from '../../../images/portfolio-page/Signing-Bee/signingBeeHome.png';
import signingBeePlay from '../../../images/portfolio-page/Signing-Bee/signingBeePlay.png';
import signingBeeLogoSVG from '../../../images/portfolio-page/Signing-Bee/signing-bee-logo.svg';
import ImageCarousel from '../../../components/image-carousel/image-carousel.jsx';
import Steven from '../../../images/portfolio-page/Signing-Bee/creators/steven_picture.png';
import Harrison from '../../../images/portfolio-page/Signing-Bee/creators/harrison_picture.jpg';
import Ricardo from '../../../images/portfolio-page/Signing-Bee/creators/ricardo_picture.png';
import Zack from '../../../images/portfolio-page/Signing-Bee/creators/zack_picture.jpg';

const carouselImages = [
    { src: signingBeeLogo, description: 'Signing Bee Logo' },
    { src: signingBeeHome, description: 'Signing Bee Home Page' },
    { src: signingBeePlay, description: 'Signing Bee Play Page' },
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

        <Footer />
    </div>
    );

}

export default signingBee;