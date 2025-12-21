import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import "./about_styles/about.css";
import { useState } from "react";
import HarrisonPic from '../../images/about-page/harrison_picture.jpg';

const about = () => {
  const [active, setActive] = useState(null);
  const contentDiv = document.getElementById('content');

  const buttons = [
    { id: 'Academics', name: 'Academics' },
    { id: 'Athletics', name: 'Athletics' },
    { id: 'Work', name: 'Work' },
    { id: 'Volunteering', name: 'Volunteering' },
  ];

  const handleClick = (id) => {
    setActive(id);

  };

  return (
    <div>

      <Header />
      <div className="about-header">
        <div className="container">
          <div className="pic-background">
            <div className = "picture">
              {/* Image can go here */}
              <img src={HarrisonPic} alt="Harrison Niswander Signature"/>

            </div>
          </div>

          <nav className="nav">
            {/* Navigation items can go here 
            <button className="button" class="button">Academics</button>
            <button className="button">Athletics</button>
            <button className="button">Work</button>
            <button className="button">Volunteering</button>
            */}

            {buttons.map((button) => (
              <button
                key={button.id}
                onClick={() => handleClick(button.id)}
                className={`button ${active === button.id ? 'active' : ''}`}
                  aria-pressed={active === button.id}
              >
                {button.name}

              </button>
            ))}

          </nav>
        
        </div>
        
        <div className="content" id="content" role="region" aria-live="polite">
          {active === 'Academics' && (
            <>
              <h2>Academics</h2>
              <p>This is the Academics section.</p>
            </>
          )}
          {active === 'Athletics' && (
            <>
              <h2>Athletics</h2>
              <p>Athletics-related content goes here.</p>
            </>
          )}
          {active === 'Work' && (
            <>
              <h2>Work</h2>
              <p>Work experience content.</p>
            </>
          )}
          {active === 'Volunteering' && (
            <>
              <h2>Volunteering</h2>
              <p>Volunteer work and involvement.</p>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );

};

export default about;