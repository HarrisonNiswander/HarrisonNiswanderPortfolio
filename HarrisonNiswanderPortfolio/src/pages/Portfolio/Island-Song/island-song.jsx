import { useNavigate } from 'react-router-dom';
import "./island-song_styles/island-song.css";
import Header from '../../../components/header/header.jsx';
import Footer from '../../../components/footer/footer.jsx';
import ImageCarousel from '../../../components/image-carousel/image-carousel.jsx';
import islandSongLogo from '../../../images/portfolio-page/Island-Song/islandSongLogo.png';
import islandSongLogoCircle from '../../../images/portfolio-page/Island-Song/logos/game_logo_360.png';
import islandSongPlainLogo from '../../../images/portfolio-page/Island-Song/logos/logo_text_simple_360.png';
import Steven from '../../../images/portfolio-page/Signing-Bee/creators/steven_picture.png';
import Harrison from '../../../images/portfolio-page/Signing-Bee/creators/harrison_picture.jpg';
import Ricardo from '../../../images/portfolio-page/Signing-Bee/creators/ricardo_picture.png';
import Zack from '../../../images/portfolio-page/Signing-Bee/creators/zack_picture.jpg';
import Riley from '../../../images/portfolio-page/Island-Song/creators/riley_picture.png';
import Logan from '../../../images/portfolio-page/Island-Song/creators/logan_picture.png';
import SteamLogo from '../../../images/portfolio-page/Island-Song/steam-logo.png';

const carouselImages = [
    { src: islandSongLogo, description: 'Island Song Logo' },
    //{ src: signingBeeHome, description: 'Signing Bee Home Page' },
    //{ src: signingBeeASL, description: 'Signing Bee ASL Reference Page' },
    //{ src: signingBeePlay, description: 'Signing Bee Play Page' },
    //{ src: signingBeeLogin, description: 'Signing Bee Login Page' },
];

const islandSong = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/portfolio');
  };
  
  return (
    <div>
      <Header />

      <button className="back-button" onClick={handleClick}>Back</button>

      <div className="title-container">
        <img src={islandSongPlainLogo} alt="Island Song Circle Logo" height={250} width={450} className="title-logo"/>

      </div>

      <br/>

      <div className="carousel">
        <ImageCarousel images={carouselImages} interval={4000} />

      </div>

      <br/>

      <div className="sb-about">
        <h2>About Island Song</h2>

        <p>
          Island Song was made from Fall 2025 thru Spring 2026 at Purdue University Fort Wayne 
          as a year-long project for CS 460 and CS 465: Senior Capstone Project. Island Song is 
          a music-based puzzle game in which the player's goal is to solve puzzles and restore 
          the color back to the island.

          <br/><br/>

          Island Song was made over the course of 8-months, starting with basic story designs 
          and puzzle concepts, and evolved into a full game with 5 unique sections of the island 
          representing a music group each with their own unique puzzle. The game was developed 
          using Unreal Engine 5, the industry standard game engine.
        </p>

      </div>

      <br/><br/>

      <div className="tech-stack">
        <h2>Tech Stack</h2>
        
        {/* List of technologies used in the project */}
        <table className="tech-table">
          <tr>
            <td className="tech">Game Engine</td>
            <td className="used">Unreal Engine 5</td>
          </tr>

          <tr>
            <td className="tech">Version Control</td>
            <td className="used">Perforce P4V</td>
          </tr>

          <tr>
            <td className="tech">Digital Assets</td>
            <td className="used">Fab Store</td>
          </tr>

          <tr>
            <td className="tech">3D Modeling</td>
            <td className="used">Blender</td>
          </tr>

          <tr>
            <td className="tech">Landscape Modeling</td>
            <td className="used">Gaea</td>
          </tr>

          <tr>
            <td className="tech">Music Composing</td>
            <td className="used">MuseScore 4</td>
          </tr>

        </table>
      </div>

      <br/><br/>

      <div className="creators-background-is">
        <h2>Meet Crustacean Works</h2>
        
        <div className="creators-container-is">  
          <div className="creator-card">
            <img src={Harrison} alt="Harrison Niswander" height={180} width={180} className="creator-image"/>
            <h3 className="name">Harrison Niswander</h3>
        
          </div>
        
          <div className="creator-card">
            <img src={Riley} alt="Riley Tate" height={180} width={180} className="creator-image"/>
            <h3 className="name">Riley Tate</h3>
        
          </div>

          <div className="creator-card">
            <img src={Ricardo} alt="Ricardo Saldana" height={180} width={180} className="creator-image"/>
            <h3 className="name">Ricardo Saldana</h3>
        
          </div>
        
          <div className="creator-card">
            <img src={Steven} alt="Steven LaGoy" height={180} width={180} className="creator-image"/>
            <h3 className="name">Steven LaGoy</h3>
                            
          </div>
        
          <div className="creator-card">
            <img src={Zack} alt="Zachary McGill" height={180} width={180} className="creator-image"/>
            <h3 className="name">Zachary McGill</h3>
                            
          </div>

          <div className="creator-card">
            <img src={Logan} alt="Logan Faulstich" height={180} width={180} className="creator-image"/>
            <h3 className="name">Logan Faulstich</h3>
                            
          </div>
        
        </div>
      </div>

      <br/><br/>

      <div className="steam">
        <h2>Play the Game</h2>
        <img src={SteamLogo} alt="GitHub Logo" height={150} width={300} className="steam-logo"
          //onClick={() => window.open("______STEAM LINK________", "_blank")}
        />
        <h2>Coming May 2026!</h2>
      </div>
      
      <br/><br/><br/>

      <Footer />

    </div>
    );

}

export default islandSong;