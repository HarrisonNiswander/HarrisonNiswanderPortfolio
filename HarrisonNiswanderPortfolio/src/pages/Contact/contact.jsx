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
        <img src={gmail} alt="Gmail" height={200} width={200} className="icon"/>
        <img src={linkedin} alt="LinkedIn" height={200} width={200} className="icon"/>
        <img src={github} alt="GitHub" height={200} width={200} className="icon"/>
        <img src={strava} alt="Strava" height={200} width={200} className="icon"/>
      </ul>

      <ul className="row">
        <img src={instagram} alt="Instagram" height={200} width={200} className="icon"/>
        <img src={facebook} alt="Facebook" height={215} width={215} className="icon"/>
        <img src={twitter} alt="Twitter" height={200} width={200} className="icon"/>
        <img src={garmin} alt="Garmin" height={200} width={200} className="icon"/>
      </ul>

    </main>

   

    <Footer />
  </div>

)

export default contact;