import "./portfolio_styles/portfolio.css";
import { useState } from "react";
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import islandSongLogo from '../../images/portfolio-page//Island-Song/islandSongLogo.png';
import signingBeeHome from '../../images/portfolio-page/Signing-Bee/signingBeeHome.png';
import signingBeePlay from '../../images/portfolio-page/Signing-Bee/signingBeePlay.png';
import signingBeeLogo from '../../images/portfolio-page/Signing-Bee/signingBeeLogo.png';

const cards = [
  { id: 1, name: "Signing Bee", image: signingBeeLogo },
  { id: 2, name: "Island Song", image: islandSongLogo },

];

const portfolio = () => {
  
  return (
    <div>
      <Header />

      <br/> {/* Break */}

      {cards.map((card) => (
        <div
          className="card"
          key={card.id}
          //onClick={() => handleClick(card.id)}
          
        >
          <img src={card.image} alt={card.name}  className="image"/>
          <h1 className="title">{card.name}</h1>

        </div>
      ))}

      

      <Footer />  
    </div>

  );
}

export default portfolio;