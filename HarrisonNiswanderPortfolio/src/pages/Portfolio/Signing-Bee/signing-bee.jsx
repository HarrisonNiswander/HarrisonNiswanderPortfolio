import { useState } from 'react';
import Header from '../../../components/header/header.jsx';
import Footer from '../../../components/footer/footer.jsx';
import signingBeeLogo from '../../../images/portfolio-page/Signing-Bee/signingBeeLogo.png';
import signingBeeHome from '../../../images/portfolio-page/Signing-Bee/signingBeeHome.png';
import signingBeePlay from '../../../images/portfolio-page/Signing-Bee/signingBeePlay.png';
import ImageCarousel from '../../../components/image-carousel/image-carousel.jsx';

const carouselImages = [
    { src: signingBeeLogo, description: 'Signing Bee Logo' },
    { src: signingBeeHome, description: 'Signing Bee Home Page' },
    { src: signingBeePlay, description: 'Signing Bee Play Page' },
];

const signingBee = () => {
  
  return (
    <div>
        <Header />

        <div className="App">
            <h1>Signing Bee</h1>
            <ImageCarousel images={carouselImages} interval={4000} />

        </div>

        <Footer />
    </div>
    );

}

export default signingBee;