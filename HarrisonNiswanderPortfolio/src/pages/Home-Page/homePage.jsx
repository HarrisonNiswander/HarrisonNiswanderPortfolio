import "./home_styles/home.css";
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';

const homePage = () => (
  <div>
    <Header />

    <h2>Home Page</h2>
    
    <br/><br/><br/>

    <p>
      Welcome to my portfolio website! Here, you'll find a showcase of my projects, skills, and 
      experiences as a developer. Feel free to explore the different sections to learn more about me 
      and my work. If you have any questions or would like to get in touch, don't hesitate to reach out 
      through the contact page. Thank you for visiting!
    </p>

    <br/><br/><br/><br/>


    <Footer/>
  </div>

)

export default homePage;