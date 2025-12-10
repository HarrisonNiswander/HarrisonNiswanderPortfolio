import "./home_styles/home.css";
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import HN_Signature from '../../images/HN_Signature.png';



const homePage = () => {
  const navigate = useNavigate();

  const aboutPageClick = () => {
    navigate('/about'); 
  };

  const portfolioPageClick = () => {
    navigate('/portfolio'); 
  };

  const contactPageClick = () => {
    navigate('/contact'); 
  };

  /*
  const ultimatePageClick = () => {
    navigate('/lime-city-ultimate'); 
  };
  */

  return (
    <div>
      <Header />

      {/* Header Section */}
      <header>
        <h1>Welcome to Harrison Niswander's Portfolio!</h1>

        <section class="intro">
          <h3>
            Here, you'll find a showcase of my projects, skills, and experiences as a developer. Feel free to 
            explore the different sections to learn more about me and my work. If you have any questions or 
            would like to get in touch, don't hesitate to reach out through the contact page. 
          </h3>
        </section>

        <br/>{/* Break */}

      </header>
      
      {/* Different Pages Section */}
      <main>
        <div class="outermost-container">
          <ul class="row1">
            <a class="about" onClick={aboutPageClick}>
              <h1>About Me</h1>

            </a>  {/* About Page */}

            <div class="port" onClick={portfolioPageClick}>
              <h1>Portfolio</h1>

            </div>  {/* Portfolio Page */}

          </ul>  {/* Row 1 */}

          <br/>{/* Break */}

          <ul class="row2">
            <div class="contact" onClick={contactPageClick}>
              <h1>Contact Me</h1>

            </div>  {/* Contact Page */}

            <div class="ultimate">
              <h1>Lime City<br/>Ultimate</h1>

            </div>  {/* Lime City Ultimate Page */}

          </ul>  {/* Row 2 */}

        </div>  {/* Outer Most Container */}

      </main>

      <br/><br/><br/><br/> {/* Break */}

      <Footer/>

    </div>

  );
  

}

export default homePage;