import "./limeCity_styles/limeCity.css";
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import LimeCityLogo from '../../images/lime-city-ultimate-page/lime-city-ult-logo.jpeg';
import YouTube from '../../images/lime-city-ultimate-page/youtube.png';

const limeCity = () => {
    return (
        <div>
          <Header />

          <h1 className="lcu-h1">Welcome to Lime City Ultimate!</h1>

          <img src={LimeCityLogo} alt="Lime City Ultimate" height={500} width={600} className="lcu_logo"/>

          <br/>{/*Blank Lines*/}

          <h2 className="lcu-h2">Check us out on YouTube</h2>
          
            <figure>
                <a href="https://www.youtube.com/@harrisonniswander8992" target="_blank" rel="noopener noreferrer">
                    <img src={YouTube} alt="Youtube Link" height={200} width={300} className="youtube"/>
                </a>
                <figcaption className="figcaption"><h3>YouTube: Harrison Niswander</h3></figcaption>
            </figure>
          

          <h2 className="lcu-h2">More Coming Soon!!</h2>

          <br/>{/*Blank Lines*/}


          <Footer/>
        </div>
    );
}

export default limeCity;