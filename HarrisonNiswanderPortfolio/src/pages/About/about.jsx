import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import "./about_styles/about.css";
import { useState } from "react";
import HarrisonPic from '../../images/about-page/harrison_picture.jpg';
import Hnhs from '../../images/about-page/hnhs.png';
import Pfw from '../../images/about-page/pfw.png';
import FirstLegoLeague from '../../images/about-page/firstLegoLeague.jpg';
import Parkmoor from '../../images/about-page/parkmoor.png';
import Tincaps from '../../images/about-page/tincaps.png';
import Stoffel from '../../images/about-page/huntington-shield.png';
import HorizonLeague from '../../images/about-page/horizonLeague.png';
import Pfw2 from '../../images/about-page/pfw2.png';
import Rv from '../../images/about-page/rv.png';
import insomniaCookies from '../../images/about-page/insomnia-cookies.jpg';

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
            {/* Navigation items can go here*/}
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
          {/* Academics --------------------------------------------------------------------------*/}
          {active === 'Academics' && ( 
            <>
              <div className="about-container">
                <h1 className="about-card-title-font">Academics</h1>
                <div className="about-card">
                  <img src={Hnhs} alt="Huntington North High School" width={175} height={175} className="school-logo"/>
                  <div className="about-content">
                    <h2>Huntington North High School</h2>
                    <ul>
                      <li>Co-Salutatorian</li>
                      <li>GPA: 4.28/4</li>
                      <li>Graduated With Honors</li>
                      <li>Class of 2022 Treasurer</li>

                    </ul>
                  </div>
                </div>

                <br/>

                <div className="about-card">
                  <img src={Pfw} alt="Purdue Fort Wayne" width={175} height={175} className="school-logo"/>
                  <div className="about-content">
                    <h2>Purdue Fort Wayne</h2>
                    <ul>
                      <li>Double Major: Computer Science and Mathematics</li>
                      <li>Minor: Actuarial Science</li>
                      <li>GPA: 3.70/4</li>
                      <li>D1 Cross Country and Track (Indoor and Outdoor Track)</li>
                      
                    </ul>
                  </div>
                </div>

              </div>
            </>
          )} 
          {/* Athletics --------------------------------------------------------------------------*/}
          {active === 'Athletics' && (
            <>
              <div className="about-container">
                <h1 className="about-card-title-font">Athletics</h1>
                <div className="about-card">
                  <img src={Hnhs} alt="Huntington North High School" width={175} height={175} className="school-logo"/>
                  <div className="about-content">
                    <h2>Huntington North High School Athletics</h2>
                    <ul>
                      <li>4-Year Varisty</li>
                      <li>Team Captain</li>
                      <li>3 x Individual State Qualifier (XC, Indoor Track, & Outdoor Track)</li>

                    </ul>
                  </div>
                </div>

                <br/>

                <div className="about-card">
                  <img src={Pfw} alt="Purdue Fort Wayne" width={175} height={175} className="school-logo"/>
                  <div className="about-content">
                    <h2>Purdue Fort Wayne Athletics</h2>
                    <ul>
                      <li>D1 Cross Country and Track (Indoor and Outdoor Track)</li>
                      <li>Broke School Records in 11 Different Events</li>
                      <li>Currently Hold 9 School Records</li>
                      <li>Horizon League Conference Champion (DMR 2024)</li>
                      <li>Horizon League Conference Runner-Up (DMR 2025 & 3k Steeple 2024)</li>
                      
                    </ul>
                  </div>
                </div>

                <br/>

                <div className="about-card">
                  <img src={insomniaCookies} alt="Insomnia Cookies" width={175} height={175} className="school-logo"/>
                  <div className="about-content">
                    <h2>Insomnia Cookies · Insomnia Athlete</h2>
                    <ul>
                      <li>NIL Deal with Insomnia Cookies for 2024-2025 Season</li>
                      <li>Two monthly posts on social media</li>
                      
                    </ul>
                  </div>
                </div>

                <br/>

                <div className="about-card">
                  <img src={HorizonLeague} alt="Horizon League" width={175} height={175} className="school-logo"/>
                  <div className="about-content">
                    <h2>2024 Horizon League Alfreeda Goff Indoor Track and Field Male Athlete of the Year</h2>
                    <ul>
                      <li>This award was voted by various coaches around the league</li>
                      <li>The award was based on my accomplishments in indoor track during the 2024 indoor season</li>
                      
                    </ul>
                  </div>
                </div>

                <br/>

                <div className="about-card">
                  <img src={Pfw2} alt="Purdue Fort Wayne" width={175} height={175} className="school-logo"/>
                  <div className="about-content">
                    <h2>2024 Purdue Fort Wayne Male Athlete of the Year</h2>
                    <ul>
                      <li>Award was voted by coaches from all the sports at the university</li>
                      <li>The award was based on my accomplishments in cross country and track, in addition to my academics</li>
                      
                    </ul>
                  </div>
                </div>

              </div>
            </>
          )}
          {/* Work Experience ---------------------------------------------------------------------*/}
          {active === 'Work' && (
            <>
              <div className="about-container">
                <h1 className="about-card-title-font">Work Experience</h1>
                <div className="about-card">
                  <img src={Tincaps} alt="Fort Wayne Tincaps" width={175} height={175} className="school-logo"/>
                  <div className="about-content">
                    <h2>Ticket Office Gameday Intern · Fort Wayne TinCaps</h2>
                    <ul>
                      <li>Provide assistance to guests with ordering tickets or accessing purchased tickets</li>
                      <li>Assist guests with the selection and purchase of their tickets.</li>
                      <li>Answering broad range of questions about anything related to Parkview Field</li>
                      
                    </ul>
                  </div>
                </div>

                <br/>

                <div className="about-card">
                  <img src={Stoffel} alt="Terry Stoffel" width={175} height={175} className="school-logo"/>
                  <div className="about-content">
                    <h2>Personal Assistant · Terry Stoffel</h2>
                    <ul>
                      <li>Operated heavy equipment when landscaping and completing miscellanous work</li>
                      <li>Prepared and listed items for sale on online platforms</li>
                      <li>Use time management and communication skills to ensure tasks are completed on time and to the expectation of my supervisor.</li>

                    </ul>
                  </div>
                </div>

                <br/>

                <div className="about-card">
                  <img src={Parkmoor} alt="Parkmoor Carwash" width={175} height={175} className="school-logo"/>
                  <div className="about-content">
                    <h2>Automotive Technician · Parkmoor Carwash</h2>
                    <ul>
                      <li>Operated carwash controls and ensured smooth process</li>
                      <li>Detailed cars to customer's satisfaction</li>
                      <li>Maintained clean work environment during breaks in customers</li>

                    </ul>
                  </div>
                </div>

              </div>

              
            </>
          )}
          {/* Volunteering -----------------------------------------------------------------------*/}
          {active === 'Volunteering' && (
            <>
              <div className="about-container">
                <h1 className="about-card-title-font">Volunteering</h1>
                <div className="about-card">
                  <img src={FirstLegoLeague} alt="First Lego League" width={175} height={175} className="school-logo"/>
                  <div className="about-content">
                    <h2>First Lego League</h2>
                    <ul>
                      <li>Help with the First Lego League Northern Indiana Semi-State</li>
                      <li>Volunteered Last 3 Years</li>
                      <li> Helped as Practice Table Monitor & Game Queuer</li>

                    </ul>
                  </div>
                </div>

                <br/>

                <div className="about-card">
                  <img src={Rv} alt="Riverview Middle School" width={175} height={175} className="school-logo"/>
                  <div className="about-content">
                    <h2>Riverview Middle School</h2>
                    <ul>
                      <li>Help with the My Mom's ED Classroom</li>
                      <li>Volunteered Last 5 Years</li>
                      <li>Engage with Students</li>

                    </ul>
                  </div>
                </div>

              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );

};

export default about;