import "./portfolio_styles/portfolio.css";
import { useState } from "react";
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import islandSongLogo from '../../images/portfolio-page//Island-Song/islandSongLogo.png';
import signingBeeHome from '../../images/portfolio-page/Signing-Bee/signingBeeHome.png';
import signingBeePlay from '../../images/portfolio-page/Signing-Bee/signingBeePlay.png';
import signingBeeLogo from '../../images/portfolio-page/Signing-Bee/signingBeeLogo.png';
import HarrisonSig from '../../images/signatures/HN_SignatureW.png';

const cards = [
  { id: 1, name: "Signing Bee", image: signingBeeLogo, description: "A fun and educational sign language learning game built with React, Node.js/Express, and Supabase." },
  { id: 2, name: "Island Song", image: islandSongLogo, description: "A relaxing island-themed game where you solve music based puzzles developed using Unreal Engine 5." },
  { id: 3, name: "More Coming Soon", image: HarrisonSig, description: "Stay tuned for more exciting projects and updates!" },

];

const portfolio = () => {
  
  return (
    <div>
      <Header />

      <h1 className="portfolio-font">Harrison Niswander's Portfolio</h1>

      {cards.map((card) => (
        <div
          className="card"
          key={card.id}
          //onClick={() => handleClick(card.id)}
          
        >
          <img src={card.image} alt={card.name}  className="image"/>
          <div className="content">
            <h1 className="title">{card.name}</h1>
            <h3 className="description">{card.description}</h3>
          </div>

        </div>
      ))}

      

      <Footer />  
    </div>

  );
}

export default portfolio;