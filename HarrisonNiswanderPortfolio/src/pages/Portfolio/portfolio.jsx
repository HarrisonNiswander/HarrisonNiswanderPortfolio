import "./portfolio_styles/portfolio.css";
import { useState } from "react";
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import PortfolioGrid from "../../components/portfolio-menu/portfolio-grid.jsx";


const games = [
  { id: 1, name: "Signing Bee", image: "./images/signingBeeHome.png" },
  { id: 2, name: "Island Song", image: "./images/islandSongLogo.png" },
  { id: 3, name: "Blank", image: "./images/signingBeeHome.png" },
  { id: 4, name: "Blank", image: "./images/signingBeePlay.png" },

];


const portfolio = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div>
      <Header />
      
      <h2>Portfolio Page</h2>

      

      <Footer />  
    </div>

  );
}

export default portfolio;