import "./contact_styles/contact.css";
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';

//images
import facebook from '../../images/contact-page/facebook.png';
import gmail from '../../images/contact-page/gmail.png';
import instagram from '../../images/contact-page/instagram.png';
import linkedin from '../../images/contact-page/linkedin.png';
import strava from '../../images/contact-page/strava.png';
import twitter from '../../images/contact-page/twitter.png';
import github from '../../images/contact-page/github.png';
import garmin from '../../images/contact-page/garmin.png';


const contact = () => (
  <div>
    <Header />
    
    <h1 className="contact-font">Contact Page</h1>

    {/* Contact Links Section */}
    <main className="links">
      <ul className="row">
        <a href="mailto:harrisonniswander@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={gmail} alt="Gmail" height={200} width={200} className="icon"/>
        </a>

        <a href="https://www.linkedin.com/in/harrison-niswander-99267b327/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" height={200} width={200} className="icon"/>
        </a>

        <a href="https://github.com/HarrisonNiswander" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" height={200} width={200} className="icon"/>
        </a>

        <a href="https://www.strava.com/athletes/43329926" target="_blank" rel="noopener noreferrer">
          <img src={strava} alt="Strava" height={200} width={200} className="icon"/>
        </a>
      </ul>

      <ul className="row">
        <a href="https://www.instagram.com/hniswander03/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" height={200} width={200} className="icon"/>
        </a>

        <a href="https://www.facebook.com/harrison.niswander/" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" height={215} width={215} className="icon"/>
        </a>

        <a href="https://x.com/HarrisonNiswan1" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" height={200} width={200} className="icon"/>
        </a>

        <a href="https://connect.garmin.com/modern/profile/04c3a507-ab31-4651-8c83-da5c5aefa07e" target="_blank" rel="noopener noreferrer">
          <img src={garmin} alt="Garmin" height={200} width={200} className="icon"/>
        </a>
      </ul>

    </main>

   

    <Footer />
  </div>

)

export default contact;