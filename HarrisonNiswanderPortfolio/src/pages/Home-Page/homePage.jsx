import "./home_styles/home.css";
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import { Link } from "react-router-dom";

const homePage = () => (
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
          <div class="item">
            <h1>About Page</h1>

          </div>  {/* About Page */}

          <div class="item">
            <h1>Portfolio Page</h1>

          </div>  {/* Portfolio Page */}

        </ul>  {/* Row 1 */}

        <br/>{/* Break */}

        <ul class="row2">
          <div class="item">
            <h1>Contact Page</h1>

          </div>  {/* Contact Page */}

          <div class="item">
            <h1>Lime City Ultimate</h1>

          </div>  {/* Lime City Ultimate Page */}

        </ul>  {/* Row 2 */}

      </div>  {/* Outer Most Container */}

    </main>

    <br/><br/><br/><br/> {/* Break */}

    <Footer/>

  </div>

  

)

export default homePage;